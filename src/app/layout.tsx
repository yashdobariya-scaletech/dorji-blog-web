import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../assets/styles/main.scss";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dorji Blog",
    description: "Dorji Blog app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                suppressHydrationWarning={true}
            >
                <div>{children}</div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </body>
        </html>
    );
}
