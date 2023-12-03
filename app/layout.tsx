import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Money",
  description: "Allan Zhantaykozha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
