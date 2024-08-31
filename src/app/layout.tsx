import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: 'Next JS Crush course',
  description: 'Welcome to the home page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
        </body>
    </html>
  );
}
