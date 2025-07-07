import Navbar from "@components/navbar/Navbar";
import "./globals.css";
import Footer from "@components/footer/Footer";

export const metadata = {
  title: "Aish Italian Recipie App",
  description: "Indulge in Italian Cusine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
