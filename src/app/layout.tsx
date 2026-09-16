import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="isolate flex min-h-full flex-col font-sans text-foreground">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>

        {/* Film grain over everything */}
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
