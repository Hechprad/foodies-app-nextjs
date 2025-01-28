import type { Metadata } from "next";
// import { Quicksand } from "next/font/google";

import "./globals.css";
import MainHeader from "@/app/components/MainHeader";

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
