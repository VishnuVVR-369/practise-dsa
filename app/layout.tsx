import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
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
      <body className={`${roboto.variable} antialiased dark`}>{children}</body>
    </html>
  );
}
