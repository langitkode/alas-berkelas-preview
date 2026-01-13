import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alas Berkelas",
  description: "Street Style & Premium Kicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
