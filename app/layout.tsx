import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globitex Luxury UI",
  description: "Luxury fashion-inspired Railway-ready website UI for Globitex."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
