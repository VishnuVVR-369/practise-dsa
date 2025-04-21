import { Metadata } from "next";
import NotificationScheduler from "./NotificationScheduler";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Practise DSA",
  description: "Practise and revise the right way using spaced repetition",
  keywords: ["DSA", "Practise", "Revise", "Spaced Repetition"],
  icons: {
    icon: [
      {
        url: "/faang.png",
        href: "/faang.png",
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
      <head>
        <link rel="icon" href="/faang.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NotificationScheduler />
        {children}
      </body>
    </html>
  );
}
