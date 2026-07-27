"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { cn } from "@bank/ui/lib/utils";

import { referralButtonClassName, TBANK_IP_REFERRAL_URL } from "@/lib/referral";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    ym?: (counterId: number, method: string, goal: string, params?: Record<string, unknown>) => void;
  }
}

type TrackedReferralLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  placement: string;
  openInNewTab?: boolean;
};

export function TrackedReferralLink({
  children,
  className,
  onClick,
  openInNewTab = false,
  placement,
  ...props
}: TrackedReferralLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const eventPayload = {
      event: "tbank_registration_click",
      placement,
      page_path: window.location.pathname,
      page_search: window.location.search,
    };

    window.dataLayer?.push(eventPayload);

    const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);
    if (counterId && window.ym) {
      window.ym(counterId, "reachGoal", "tbank_registration_click", { placement });
    }

    onClick?.(event);
  };

  return (
    <a
      className={cn(referralButtonClassName, className)}
      data-cta="tbank-registration"
      data-cta-placement={placement}
      href={TBANK_IP_REFERRAL_URL}
      onClick={handleClick}
      rel={openInNewTab ? "sponsored nofollow noopener noreferrer" : "sponsored nofollow"}
      target={openInNewTab ? "_blank" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
