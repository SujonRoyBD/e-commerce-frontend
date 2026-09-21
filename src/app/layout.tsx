import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import ReduxProvider from "@/redux/features/ReduxProvider/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Table Fresh | Local Organic Produce & Family Farm Marketplace",
  description:
    "Discover fresh, chemical-free fruits, vegetables, artisan honey, and sourdough direct from local family farms and home gardens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between bg-[#FBFBFB]`}>
        <ReduxProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
