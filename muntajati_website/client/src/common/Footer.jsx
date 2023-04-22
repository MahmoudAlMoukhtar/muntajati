import React from "react";
import {Link} from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import {HiLocationMarker, HiMail} from "react-icons/hi";
import {BsFillPhoneFill, BsTelephoneFill} from "react-icons/bs";
import {Ri24HoursLine, RiWhatsappFill} from "react-icons/ri";
//import {useTranslation} from "react-i18next";
//import {toast} from "react-toastify";
import {FaLanguage} from "react-icons/fa";
import {useState} from "react";
import {BiLocationPlus} from "react-icons/bi";
import {NavHashLink} from "react-router-hash-link";

//import * as api from "../api/index";
//import * as EmailValidator from "email-validator";
//import {NavHashLink} from "react-router-hash-link";

const Footer = () => {
  //const [t, i18n] = useTranslation();
  const [emailSubscripe, setEmailSubscripe] = useState();
  return (
    <footer className="flex flex-col items-center gap-10 py-10 px-4 px-4 md:px-10 lg:px-40 w-full bg-[#111111] mt-20">
      <div
        className={
          "flex flex-col justify-between items-center sm:flex-row sm:justify-between sm:items-start gap-10 flex-wrap sm:flex-nowrap text-white w-full"
        }
        dir="rtl"
      >
        <div
          className={
            "flex flex-col items-center text-center sm:text-start sm:items-start gap-10 sm:gap-4 w-64"
          }
        >
          <NavHashLink to="/#">
            <h2 className="text-[#17b5fb] font-bold text-3xl">Muntajati.</h2>
          </NavHashLink>

          <p className="text-sm text-white">
            متجر منتجاتي يوفر لك أفضل الأجهزة التقنية في متناول يديك
          </p>
          <ul className="flex items-center gap-1">
            <a href="http://wa.me/+9647833205129" target="blank">
              <RiWhatsappFill
                size={20}
                color="#17b5fb"
                className="cursor-pointer"
              />
            </a>
            <AiFillInstagram
              size={20}
              color="#17b5fb"
              className="cursor-pointer"
            />
          </ul>
        </div>
        <section
          className={
            "flex flex-col justify-center items-center text-center sm:flex-row  sm:justify-between sm:items-start sm:text-start sm:w-[600px] gap-10 sm:gap-4 flex-wrap sm:flex-nowrap w-full"
          }
        >
          <div className={"flex flex-col gap-10 sm:gap-4"}>
            <h5 className="text-md font-bold">روابط عامّة</h5>
            <nav
              className={
                "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
              }
            >
              <NavHashLink to={"/#"} className="text-white text-sm">
                الصفحة الرئيسية
              </NavHashLink>
              <NavHashLink to={"/#products"} className="text-white text-sm">
                منتجاتنا
              </NavHashLink>
            </nav>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
            }
          >
            <h5 className="text-md font-bold">من نحن؟</h5>
            <nav
              className={
                "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
              }
            >
              <NavHashLink to="/#services" className="text-white text-sm">
                خدماتنا
              </NavHashLink>
              <NavHashLink to="/#contact" className="text-white text-sm">
                تواصل معنا
              </NavHashLink>
            </nav>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
            }
          >
            <h5 className="text-md font-bold">معلومات التواصل</h5>
            <nav
              className={
                "flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-10 sm:gap-4"
              }
            >
              <p className="text-sm flex gap-2 items-center">
                <BiLocationPlus size={20} color="#17b5fb" />
                IRAQ
              </p>
              <p className="text-sm flex gap-2 items-center">
                <BsFillPhoneFill size={20} color="#17b5fb" />
                +9647833205129
              </p>
              <p className="text-sm flex gap-2 items-center">
                <HiMail size={20} color="#17b5fb" />
                muntajati@gmail.com
              </p>
              <div className="flex items-center gap-2">
                <div>
                  <Ri24HoursLine color="#17b5fb" size={20} />
                </div>
                <p className="text-white text-sm">24/7</p>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
/* 
<div className="flex flex-col sm:flex-row items-center gap-2">
        <div>
          <FaLanguage color="#17b5fb" size={50} />
        </div>
      </div>
 <select
          className="text-black font-bold border-2 border-[#17b5fb] bg-[#17b5fb] rounded px-1 text-xs sm:px-2 sm:py-1 cursor-pointer w-40 py-2 "
          onChange={e => i18n.changeLanguage(e.target.value)}
        >
          <option value={"en"}>English</option>
          <option value={"ar"}>العربية</option>
        </select>
*/
/* 
<div className="flex flex-col items-center text-center sm:text-start gap-2 sm:gap-6 text-white">
        <h2 className="text-2xl sm:text-4xl font-bold">Subscripe Newsletter</h2>
        <div className="flex justify-center items-center gap-2 sm:gap-6 text-black">
          <form
            onSubmit={async e => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              required
              className="rounded-l-full border-2 border-[#17b5fb] py-2 px-2 sm:px-4 "
              placeholder="example@gmail.com"
              onChange={e => {
                setEmailSubscripe(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-[#17b5fb] rounded-r-full py-2 px-2 sm:px-4 border-2 border-[#17b5fb] font-bold"
            >
              Subscripe
            </button>
          </form>
        </div>
      </div>
*/
