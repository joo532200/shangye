import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOBITEX | 企业官网",
  description: "GLOBITEX 企业官网与团队展示页面"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
