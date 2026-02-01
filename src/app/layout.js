import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Footer from "@/components/Footer";
import {Urbanist} from "next/font/google";
import TopBadge from "@/components/ui/TopBadge";
const geistubanist = Urbanist({
  variable: "--Urbanist",
  subsets: ["latin"],
});
export const metadata = {
  title: "Staffing & IT Solutions",
  description: "Static site built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          <SmoothScroll>
            <TopBadge/>
            <Navbar />

            {children}
            <Footer/>
          </SmoothScroll>
        
      </body>
    </html>
  );
}
