import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TabBar from "./tab-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spring Swings",
  description: "Let's ball",
  manifest: "/manifest.json",
  icons: "/logo.png",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    startupImage: "apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: '#d1edd1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{marginBottom: 75}}>
          {children}
        </div>
        <TabBar />
      </body>
    </html>
  );
}
