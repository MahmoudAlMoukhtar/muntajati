import React from "react";
import Spinner from "../../../Spinner";
import {useProducts} from "../../../context/ProductsContext";
import {RiWhatsappFill} from "react-icons/ri";
import {FaShippingFast} from "react-icons/fa";
import {BiSupport} from "react-icons/bi";
import {MdOutlinePayments} from "react-icons/md";
import {IoMdPricetags} from "react-icons/io";
import PageNotFound from "../../../PageNotFound";
import {Link} from "react-router-dom";
function ServicesSection() {
  const {data: products, loading, error} = useProducts();

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return;
  return (
    <section
      id="services"
      className="bg-[#222222] contanier flex flex-col  md:justify-between  items-center gap-20 px-4 sm:px-8 xl:px-16 pt-10"
    >
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h2 className="text-center text-[#17b5fb] font-bold text-6xl">
          خدماتنا
        </h2>
        <h2 className="text-center text-white font-semibold" dir="rtl">
          نحن نقدم أكثر من منتجات عالية التقنية !
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 sm:gap-6 justify-center w-full">
        <div className="bg-[#393939] flex justify-between items-start gap-10 rounded-xl px-4 shadow-xl w-[500px] hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <span className="text-[100px] sm:text-[120px]">
              <FaShippingFast color="#17b5fb" />
            </span>
          </div>
          <div
            className="flex flex-col justify-center items-start w-full translate-y-[-30px]"
            dir="rtl"
          >
            <h2 className="text-white font-bold text-xl">شحن سريع</h2>
            <p className="text-white text-sm sm:text-md">
              نقدّم لزبائننا شحن سريع وآمن للمنتجات مع إمكانية إيصال المنتج إلى
              مكان إقامة الزبون
            </p>
          </div>
        </div>
        <div className="bg-[#393939] flex justify-between items-start gap-10 rounded-xl px-4 shadow-xl w-[500px] hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <span className="text-[100px] sm:text-[120px]">
              <BiSupport color="#17b5fb" />
            </span>
          </div>
          <div
            className="flex flex-col justify-center items-start w-full translate-y-[-30px]"
            dir="rtl"
          >
            <h2 className="text-white font-bold text-xl">دعم فنّي 24/7</h2>
            <p className="text-white text-sm sm:text-md">
              نقدّم لزبائننا دعم فني 24/7 تواصل معنا في أي وقت للاستفسار عن أي
              منتج أو الابلاغ عن أي مشكلة قد واجهتك
            </p>
          </div>
        </div>
        <div className="bg-[#393939] flex justify-between items-start gap-10 rounded-xl px-4 shadow-xl w-[500px] hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <span className="text-[100px] sm:text-[120px]">
              <MdOutlinePayments color="#17b5fb" />
            </span>
          </div>
          <div
            className="flex flex-col justify-center items-start w-full translate-y-[-30px]"
            dir="rtl"
          >
            <h2 className="text-white font-bold text-xl">دفع سهل وآمن</h2>
            <p className="text-white text-sm sm:text-md">
              نحن نقدّر قلق بعض الزبائن من الدفع وعدم الحصول على المنتج أو الخوف
              من الحصول على المنتج بمواصفات سيئة ليست كما المتوقع لذلك نحن نقدّم
              امكانية الدفع بعد استلام المنتج وإرجاعه في حال خالف المواصفات
              المتفق عليها
            </p>
          </div>
        </div>
        <div className="bg-[#393939] flex justify-between items-start gap-10 rounded-xl px-4 shadow-xl w-[500px] hover:scale-105 transition duration-500">
          <div className="translate-y-[-50px]">
            <span className="text-[100px] sm:text-[120px]">
              <IoMdPricetags color="#17b5fb" />
            </span>
          </div>
          <div
            className="flex flex-col justify-center items-start w-full translate-y-[-30px] "
            dir="rtl"
          >
            <h2 className="text-white font-bold text-xl">أسعار منافسة</h2>
            <p className="text-white text-sm sm:text-md">
              أسعارنا منافسة في السوق وبقوّة فنحن نسعى لتلبية مطالب زبائننا
              بأرخص الأسعارالممكنة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
