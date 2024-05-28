import { Space_Grotesk} from "next/font/google";
import '../styles/styles.scss';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenu from "@/components/mobileMenu/MobileMenu";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weights: ['400', '500' ]});


export const metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} `}>
        <Header />
        {children}
        <Footer />
        <MobileMenu />
      </body>
    </html>
  );
}
