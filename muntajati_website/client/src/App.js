import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import DetailProduct from "./pages/DetailProduct/index";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import Footer from "./common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./common/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./pages/Auth/index";
import AboutPage from "./pages/About Us";
import Pay from "./components/Pay";
import PrivaitRoute from "./components/PrivaitRoute";
import {ProductsProdvider, useProducts} from "./context/ProductsContext";
import {CartProvider, useCart} from "./context/CartContext";
import Spinner from "./Spinner";

export default function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  const {loading, error} = useCart();
  const {loading: loadingProducts, error: errorProducts} = useProducts();
  if (error || errorProducts) throw error;
  if (loading || loadingProducts) return <Spinner />;
  return (
    <React.Fragment>
      <ScrollToTop />

      <div className="flex flex-col items-center w-[100%] bg-[#222222]">
        <Navbar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
        <NavbarModal
          setNavBarModal={setNavBarModal}
          navbarModal={navBarModal}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setNavBarModal={setNavBarModal}
                navbarModal={navBarModal}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage setNavBarModal={setNavBarModal} />}
          />
          <Route
            path="/:category/:id"
            element={<DetailProduct setNavBarModal={setNavBarModal} />}
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}
