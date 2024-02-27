"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster, toast } from "sonner";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "HNIPRIME",
//   description: "hniprime",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto w-full">
        <Toaster richColors position="bottom-right" />
        <Provider store={store}>
          <AntdRegistry>{children}</AntdRegistry>
        </Provider>
      </body>
    </html>
  );
}
