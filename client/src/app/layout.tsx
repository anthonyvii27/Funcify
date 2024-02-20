import Providers from "@/app/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode;
}>): ReactNode {
    return (
        <html lang="en">
            <body style={inter.style}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
