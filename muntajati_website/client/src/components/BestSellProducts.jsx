import React from "react";
import Spinner from "../Spinner";
import useFetch from "../services/useFetch";
import PageNotFound from "../PageNotFound";
import {Link} from "react-router-dom";
import Product from "./Product";
import {useProducts} from "../context/ProductsContext";
import {RiWhatsappFill} from "react-icons/ri";
function BestSellProducts() {
  const {data: products, loading, error} = useProducts();

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return;
  return (
    <section className="bg-[#222222] contanier flex flex-col  md:justify-between  items-center gap-20 px-8 xl:px-16 pt-10">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h2 className="text-center text-[#17b5fb] font-bold text-6xl">
          المنتجات
        </h2>
        <h2 className="text-center text-white font-semibold">
          أي نوع من المنتجات تبحث عنه؟
        </h2>
      </div>
      <div className="flex flex-wrap  gap-6 justify-center w-[100%]">
        <div className="bg-[#393939] flex flex-col items-center rounded-xl px-10 shadow-xl w-96 hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <img src="/layer03.png" className="w-[50px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full translate-y-[-30px]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white">Miicrofiber</p>
              <p className="text-white">2in1</p>
              <p className="text-white">$US 0.78</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center item-center gap-2 w-full">
              <a
                href="http://wa.me/+9647833205129"
                target="blank"
                id="main_header-btnShopNow"
                className="flex justify-center items-center bg-[#17b5fb] py-2 px-7 rounded-full font-semibold text-white"
              >
                <RiWhatsappFill size={20} />
                الواتساب
              </a>

              <button className="bg-[#] text-white rounded-full px-4 py-2 border border-2">
                رؤية التفاصيل
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#393939] flex flex-col items-center rounded-xl px-10 shadow-xl w-96 hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <img src="/layer.png" className="w-[150px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full translate-y-[-30px]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white">Audifonos</p>
              <p className="text-white">IPX7</p>
              <p className="text-white">$US 15</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center item-center gap-2 w-full">
              <a
                href="http://wa.me/+9647833205129"
                target="blank"
                className="flex justify-center items-center bg-[#17b5fb] py-2 px-7 rounded-full font-semibold text-white"
              >
                <RiWhatsappFill size={20} />
                الواتساب
              </a>
              <button className="bg-[#] text-white rounded-full px-4 py-2 border border-2">
                رؤية التفاصيل
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#393939] flex flex-col items-center rounded-xl px-10 shadow-xl w-96 hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <img src="/layer01.png" className="w-[150px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full translate-y-[-30px]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white">M35 TWS BT 5.2</p>
              <p className="text-white">Bass M35</p>
              <p className="text-white">$US 10</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center item-center gap-2 w-full">
              <a
                href="http://wa.me/+9647833205129"
                target="blank"
                className="flex justify-center items-center bg-[#17b5fb] py-2 px-7 rounded-full font-semibold text-white"
              >
                <RiWhatsappFill size={20} />
                الواتساب
              </a>
              <button className="bg-[#] text-white rounded-full px-4 py-2 border border-2">
                رؤية التفاصيل
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#393939] flex flex-col items-center rounded-xl px-10 shadow-xl w-96 hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <img src="/layer02.png" className="w-[150px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full translate-y-[-30px]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white">Airpods Pro 1 2 3</p>
              <p className="text-white">3in1</p>
              <p className="text-white">$US 1.6</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center item-center gap-2 w-full">
              <a
                href="http://wa.me/+9647833205129"
                target="blank"
                className="flex justify-center items-center bg-[#17b5fb] py-2 px-7 rounded-full font-semibold text-white"
              >
                <RiWhatsappFill size={20} />
                الواتساب
              </a>
              <button className="bg-[#] text-white rounded-full px-4 py-2 border border-2">
                رؤية التفاصيل
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BestSellProducts;
/* 
{productsSlice.map(p => (
          <Product product={p} key={p.id} />
        ))}
*/
