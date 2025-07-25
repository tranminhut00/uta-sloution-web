import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function RootLayout() {
  return (
    <html lang="vi" className="dark">
      <body className="bg-background text-foreground">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}