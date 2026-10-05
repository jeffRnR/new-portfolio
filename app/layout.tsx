import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const fontSans = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Jeff Jackson Munyigi | Software Engineer",
  description:
    "Jeff Jackson Munyigi is a Nairobi-based software engineer building practical full-stack, AI and fintech products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
