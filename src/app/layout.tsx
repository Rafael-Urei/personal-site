import { Header } from "@/components/Header/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "My personal site, made by me, using Next.js and React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
