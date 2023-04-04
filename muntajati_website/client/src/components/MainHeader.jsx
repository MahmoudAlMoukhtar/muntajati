import React from "react";
import {useNavigate} from "react-router-dom";
import "animate.css";
import {RiWhatsappFill} from "react-icons/ri";

const styles = {
  transform: "translatex(-70px)",
};
const MainHeader = ({title}) => {
  const navigait = useNavigate();

  return (
    <section
      id="main_header"
      className="flex flex-col bg-[#222222] p-8 gap-40 md:gap-24 px-4 sm:px-10 lg:px-20 w-full"
    >
      <div className="flex flex-col md:flex-row justify-center sm:justify-between items-center w-full">
        <div
          id="main-text"
          className="flex flex-col items-center text-center md:items-start md:text-start gap-y-12 sm:gap-y-8 md:gap-y-8 flex-2 w-full md:w-1/2"
        >
          <div className="flex flex-col hidden md:block">
            <h2
              id={"main_header-title"}
              className="text-2xl sm:text-2xl md:text-xl font-bold text-white animate__animated animate__wobble"
            >
              IPX7 Tws
            </h2>
            <h1
              id={"main_header-title"}
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white animate__animated animate__wobble"
            >
              M22 TWS
            </h1>
          </div>
          <h1
            id={"main_header-title"}
            className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-white   animate__animated animate__wobble"
          >
            Audifonos
          </h1>
          <img
            id="couchImg"
            src="/layer.png"
            alt="couch"
            className="transition duration-600 z-10 w-1/2 md:translate-x-[110px] block md:hidden"
          />
          <p
            id="main_header-descraption"
            className="text-gray-400 text-sm sm:text-sm md:text-md w-full lg:w-[600px]"
          >
            Donec vitae quis nisi dapibus malesuada. Nuilam ac ailqut velit.
            Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div id="main-btns" className="flex gap-x-2 w-full">
            <a
              href="http://wa.me/+9647833205129"
              target="blank"
              id="main_header-btnShopNow"
              className="flex items-center justify-center gap-2 text-sm sm:text-md w-1/2 bg-[#17b5fb] py-2 sm:px-7 rounded-full font-semibold text-white"
              onClick={() => navigait("/allProducts")}
            >
              <RiWhatsappFill size={20} />
              الواتساب
            </a>
            <button
              id="main_header-btnExplore"
              className="text-sm sm:text-md w-1/2 hover:bg-[#17b5fb] hover:text-black bg-transpert py-2 sm:px-7 rounded-full font-semibold border-2 border-gray-400 text-white"
            >
              رؤية المزيد من التفاصيل
            </button>
          </div>
        </div>
        <div
          id="main-imgs"
          className="flex flex-col-reverse md:flex-row items-center justify-center  w-1/2 hidden md:flex"
        >
          <img
            id="couchImg"
            src="/layer.png"
            alt="couch"
            className="transition duration-600 z-10 w-[500px] md:translate-x-[110px]"
          />
          <h3 className="text-[#17b5fb] text-[100px] lg:text-[120px] font-bold md:rotate-[90deg]">
            IPX7
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center  text-center md:items-end w-full md:text-end translate-y-[-100px] text-white">
        <h3 className="font-bold">Description</h3>
        <p className="md:w-60">
          Donec vitae quis nisi dapibus malesuada. Nuilam ac ailqut velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </section>
  );
};
export default MainHeader;
