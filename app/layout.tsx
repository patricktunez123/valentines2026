import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyLove - Wedding Next.js Template",
  description: "Wedding landing page inspired by MyLove template."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
