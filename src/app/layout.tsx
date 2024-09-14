import NavBar from "@/components/other/NavBar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/other/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Generic Auth",
    absolute: "Generic Auth",
  },
  description:
    "Generic Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="max-w-[1440px] mx-auto">
            <NavBar />
            {children}
            {/* <Footer /> */}
          </div>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
