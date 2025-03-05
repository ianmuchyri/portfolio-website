import type { Metadata } from "next";
import "./css/globals.scss";
import "./css/card.scss";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio for Ian Muchiri - Software Engineer",
  description:
    "I am a Software Engineer with a passion for problem-solving and innovation. I love learning new technologies and continuously improving my skills. I thrive in collaborative environments and enjoy tackling challenging projects that push me to grow. With a quick learning ability and a strong analytical mindset, I am always eager to take on new opportunities and contribute to impactful solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
