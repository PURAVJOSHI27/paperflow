import type { Metadata, Viewport } from "next";
import { Syncopate, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paperflow — Previous Year Question Papers (VIT AP)",
  description: "Access previous year question papers for CSE4004 (Web Technologies) and other courses at VIT AP with a sleek, distraction-free interface.",
  keywords: ["VIT AP", "PYQ", "Question Papers", "CSE4004", "Web Technologies", "Engineering"],
  authors: [{ name: "VIT AP Student Community" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syncopate.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
