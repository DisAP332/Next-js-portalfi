import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartProvider from "./CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portalfi-jbw",
  description: "A website data editing application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200 text-slate-100 container`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
