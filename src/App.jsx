import { Route, Routes } from "react-router-dom";
// Pages:
import HomePage from "@pages/HomePage";
import ProductsPage from "@pages/ProductsPage";
import ProductDetailsPage from "@pages/ProductDetailsPage";
import ContactPage from "@pages/ContactPage";
// Common Components:
import NavigraitonBar from "@components/Layout/NavigationBar";
import Faqs from "@components/Layout/Faqs";
import CTA from "@components/Layout/CTA";
import Footer from "@components/Layout/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-dark-06 text-white font-roboto">
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Faqs */}
      <Faqs />
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;