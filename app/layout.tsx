import type { Metadata } from "next";
// import { Quicksand } from "next/font/google";

import "./globals.css";
import MainHeader from "@/components/MainHeader";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const quickSand = Quicksand({
//   variable: "--font-quick-sand",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
  authors: [{ name: "Jorge Hecherat", url: "https://github.com/Hechprad" }],
  creator: "Jorge Hecherat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
