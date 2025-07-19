import { GoogleAnalytics } from "@next/third-parties/google"; // For GA4 & Google Ads

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* This adds the gtag.js script automatically */}
        <GoogleAnalytics gaId="AW-978999945" />
        {children}
      </body>
    </html>
  );
}
