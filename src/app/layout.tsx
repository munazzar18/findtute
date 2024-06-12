import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const assistant = Assistant({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "teachU",
  description: "only platform find teachers onsite or online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
