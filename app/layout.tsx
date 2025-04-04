import type { Metadata } from "next";
import {Inter} from "next/font/google"
import Header from "@/components/header"
import "./globals.css";

// setting up customn font
const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Welth",
  description: "Personal finance tracker application",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${inter.className}`}>
        {/* header component */}
        <Header />
          
        {/* main content */}
        <main className="min-h-screen">
        {children}
        </main>
        {/* footer component */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
            Made with ❤️ by Shubham
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
