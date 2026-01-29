import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import Transition from "@/components/ui/Transition";
import { MeteorsDemo } from "@/components/MeteorsDemo";

export const metadata = {
  title: "Staffing & IT Solutions",
  description: "Static site built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Transition>
          <LenisProvider>
            <Navbar />

            {children}
          </LenisProvider>
        </Transition>
      </body>
    </html>
  );
}
