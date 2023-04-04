import React from "react";
import Blogs from "../../components/Blogs";
import ProductsSlider from "../../components/ProductsSlider";
import Testimonailas from "../../components/Testimonailas";
import WhyChoose from "../../components/WhyChose";
import BestSellProducts from "../../components/BestSellProducts";
import MainHeader from "../../components/MainHeader";
import ServicesSection from "./ServicesSection/ServicesSection";
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
    <React.Fragment>
      <MainHeader title="Welcome to our store" />
      <div className="flex flex-col gap-40 w-full">
        <BestSellProducts numStartSlice={0} numEndSlice={3} />
        <ServicesSection />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
