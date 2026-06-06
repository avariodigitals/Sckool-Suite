/**
 * Analytics.tsx
 * Loads GA4, Microsoft Clarity, and Meta Pixel via next/script.
 * No script blocks the critical render path.
 *
 * Add real IDs in .env.local — empty string = script is skipped.
 */
import Script from "next/script";

const GA_ID      = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID   ?? "";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID  ?? "";
const PIXEL_ID   = process.env.NEXT_PUBLIC_META_PIXEL_ID       ?? "";

export default function Analytics(): React.ReactElement {
  return (
    <>
      {/* ── Google Analytics 4 — lazyOnload keeps TBT low ── */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="ga4-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      {/* ── Microsoft Clarity — afterInteractive ── */}
      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${CLARITY_ID}");
          `}
        </Script>
      )}

      {/* ── Meta Pixel — afterInteractive, fires PageView ── */}
      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${PIXEL_ID}');
            fbq('track','PageView');
          `}
        </Script>
      )}
    </>
  );
}

/** Fire GA4 + Meta Pixel Lead events after a successful demo form submission. */
export function trackDemoSubmission(data?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    fbq?:  (...args: unknown[]) => void;
  };
  w.gtag?.("event", "demo_booking_submitted", {
    event_category: "Lead",
    event_label:    data?.school ?? "unknown",
  });
  w.fbq?.("track", "Lead", data ?? {});
}
