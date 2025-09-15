import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });


export const metadata: Metadata = {
  title: "My NextJS Blog Project",
  description: "This is Scotty's Blog project written using NextJS, Typescript and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
          >
            <Navigation />
              {children}
            <Footer />
      </body>
    </html>
  );
}
