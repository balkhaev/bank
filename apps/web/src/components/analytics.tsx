import Script from "next/script";

export function Analytics() {
  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);

  if (!Number.isSafeInteger(counterId) || counterId <= 0) {
    return null;
  }

  const initializationCode = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(${counterId}, "init", {
      accurateTrackBounce: true,
      clickmap: true,
      sendTitle: false,
      trackLinks: true,
      webvisor: false
    });
  `;

  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {initializationCode}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ left: "-9999px", position: "absolute" }}
          />
        </div>
      </noscript>
    </>
  );
}
