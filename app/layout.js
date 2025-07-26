import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MainHeader from "@/components/main-header/main-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Next Level Food",
  description: "Delicious food shared by a loving food community",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <MainHeader />
        {children}
      </body>
    </html>
  );
}
