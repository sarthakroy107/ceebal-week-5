import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/redux-provider";
import SongController from "@/components/player";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Created by Sarthak Roy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="w-full min-h-screen bg-[#121212]">
            <div className="flex gap-x-1 w-full bg-black">
              <Sidebar />
              {children}
            </div>
            <SongController />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
