export type AccessTier = "trial" | "applied" | "pro";

export type AccessState = {
  expiresAt?: string;
  remaining: number | null;
  tier: AccessTier;
  updatedAt: string;
};

export const ACCESS_STORAGE_KEY = "delopusk-access-v1";
export const TRIAL_ACTIONS = 5;
export const APPLIED_BONUS_ACTIONS = 12;
export const PRO_DAYS = 30;

const nowIso = () => new Date().toISOString();

const createTrialState = (remaining = TRIAL_ACTIONS): AccessState => ({
  remaining,
  tier: "trial",
  updatedAt: nowIso(),
});

const isExpired = (state: AccessState) =>
  Boolean(state.expiresAt && new Date(state.expiresAt).getTime() <= Date.now());

const isAccessState = (value: unknown): value is AccessState => {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<AccessState>;
  return (
    (candidate.tier === "trial" || candidate.tier === "applied" || candidate.tier === "pro") &&
    (candidate.remaining === null || typeof candidate.remaining === "number") &&
    typeof candidate.updatedAt === "string"
  );
};

export function readAccessState(): AccessState {
  if (typeof window === "undefined") return createTrialState();

  try {
    const raw = window.localStorage.getItem(ACCESS_STORAGE_KEY);
    if (!raw) {
      const initial = createTrialState();
      window.localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!isAccessState(parsed)) throw new Error("Invalid access state");

    if (isExpired(parsed)) {
      const expired = createTrialState(0);
      window.localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(expired));
      return expired;
    }

    return parsed;
  } catch {
    const fallback = createTrialState();
    window.localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(fallback));
    return fallback;
  }
}

export function writeAccessState(state: AccessState): AccessState {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(state));
  }
  return state;
}

export function consumeAccessAction(): AccessState {
  const current = readAccessState();
  if (current.remaining === null) return current;

  return writeAccessState({
    ...current,
    remaining: Math.max(0, current.remaining - 1),
    updatedAt: nowIso(),
  });
}

export function claimAppliedBonus(): AccessState {
  const current = readAccessState();
  if (current.tier === "pro" || current.tier === "applied") return current;

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  return writeAccessState({
    expiresAt,
    remaining: Math.max(0, current.remaining ?? 0) + APPLIED_BONUS_ACTIONS,
    tier: "applied",
    updatedAt: nowIso(),
  });
}

export function activateProAccess(days = PRO_DAYS): AccessState {
  const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
  return writeAccessState({
    expiresAt,
    remaining: null,
    tier: "pro",
    updatedAt: nowIso(),
  });
}

export function accessTierLabel(state: AccessState): string {
  if (state.tier === "pro") return "Pro-доступ активен";
  if (state.tier === "applied") return `Бонус после заявки · ${state.remaining ?? 0} действий`;
  return `Пробный доступ · ${state.remaining ?? 0} из ${TRIAL_ACTIONS}`;
}
