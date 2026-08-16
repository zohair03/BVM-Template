import { Bitcount_Single, Boldonse, Roboto, Playfair_Display, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import BusinessInfo from "@/cms/business Info/businessInfo";
import Navbar from "@/components/sections/navbarSection/navbar";
import Footer from "@/components/sections/footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins', 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', 
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const bitcountSingle = Bitcount_Single({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-bitcount-single',
  display: 'swap',
})

const boldonse = Boldonse({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-boldonse',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: BusinessInfo.BusinessName,
  description: "Computer reparing shop and refurbhish laptop selling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${bitcountSingle.variable} ${boldonse.variable} ${playfair.variable} ${montserrat.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}