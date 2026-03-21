import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Domain Powers – APFC Panel Manufacturer | LT & HT APFC Panels India",
  description: "Domain Powers is India's leading APFC Panel Manufacturer & Supplier. We offer LT & HT APFC Panels, Hybrid APFC, SVG-based systems, and IoT-enabled power factor correction solutions. CPRI Approved | ISO 9001:2015.",
  keywords: "APFC Panel Manufacturer, LT APFC Panels, HT APFC Panels, Power Factor Correction, Reactive Power Management, Capacitor Bank, CPRI Approved APFC Panel, Automatic Power Factor Correction Panel, Power Factor Correction System, Power Quality Improvement, Energy Efficiency Panels, Electrical Panel Manufacturer, Power Factor Controller, Industrial APFC Panel, LT HT Power Factor Panels, Power Factor Optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="app">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
