import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIETNAM TRIP ",
  description: "Trip Planners",
  openGraph: {
    title: "VIETNAM TRIP ",
    description: "Trip Planners",
    url: "https://promos.tripplanners.co.in",
    siteName: "Trip Planners",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.variable}`}>{children}
              <ToastContainer position="top-right" autoClose={4000} />

      </body>
    </html>
  );
}
