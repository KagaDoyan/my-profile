import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NetworkMeshLayout from "./components/networkmesh";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Profile",
  description: "My personal profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
        <NetworkMeshLayout
          dotColor="rgba(255, 99, 71, 0.8)"
          lineColor="rgba(255, 99, 71, 0.5)"
          speed={0.1}
          children={children}
          dotCount={170}
        />
      </body>
    </html>

  );
}
