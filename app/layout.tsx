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
          <body>
            {/* ✅ Move scripts here, not inside <head> */}
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
            {children}
          </body>
        </html>
      );
    }
