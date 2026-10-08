import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const gued = localFont({
  src: [
    {
      path: "../fonts/Gued.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gued - Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gued",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shorya Pratap Rathore | Portfolio",
  description: "Personal Portfolio of Shorya Pratap Rathore - Software Engineer & Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${gued.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
