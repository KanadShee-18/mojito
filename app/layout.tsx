import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Text, Mona_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dmserif",
  subsets: ["latin"],
  weight: ["400"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velvet Pour",
  description:
    "A blend of premium ingredients,creative flair, and timeless recipes - designed to delight your senses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} ${monaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
