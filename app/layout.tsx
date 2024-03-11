import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const calibre = localFont({
  src: [
    {
      path: "../fonts/Calibre/Calibre-Regular.woff2",
      weight: "200",
    },
    {
      path: "../fonts/Calibre/Calibre-Medium.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Calibre/Calibre-Seibold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-calibre",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calibre.variable} bg-gray-900 text-zinc-200`}>
        {children}
      </body>
    </html>
  );
}