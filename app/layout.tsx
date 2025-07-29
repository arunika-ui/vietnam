    // app/layout.tsx
    import "./globals.css";
    import { Poppins } from "next/font/google";
    import Script from "next/script";

    const poppins = Poppins({
      subsets: ["latin"],
      weight: ["400", "500", "600", "700"],
      variable: "--font-poppins",
    });

    export const metadata = {
      title: "Trip Planners Vietnam Promo",
      description: "Plan your next trip to Vietnam with Trip Planners.",
    };

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en" className={poppins.variable}>
          <head>
            {/* Google Tag Manager & Ads */}
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-978999945"
            />
            <Script
              id="google-ads"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-978999945');
                `,
              }}
            />

            {/* WhatsApp Lead Conversion Tracking */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  function gtag_report_conversion(url) {
                    var callback = function () {
                      if (typeof(url) != 'undefined') {
                        window.location = url;
                      }
                    };
                    gtag('event', 'conversion', {
                        'send_to': 'AW-978999945/Ifv0CKLwg_QaEIm16dID',
                        'event_callback': callback
                    });
                    return false;
                  }
                `,
              }}
            />

            {/* Call Button Conversion Tracking */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  gtag('config', 'AW-978999945/GibBCKXwg_QaEIm16dID', {
                    'phone_conversion_number': '+919891000594'
                  });
                `,
              }}
            />
          </head>
          <body>
            {children}
          </body>
        </html>
      );
    }
