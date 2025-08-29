import { Geist, Geist_Mono } from "next/font/google";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import page from "./loading";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights you need
  variable: "--font-ubuntu",    // custom CSS variable
});

export const metadata = {
  title: "Artelligence | AI & Robotics HTML"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-teal-100 via-white to-emerald-100 `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
