import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {TfiMenuAlt} from "react-icons/tfi";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import {useCart} from "../context/CartContext";
import Spinner from "../Spinner";
import {NavHashLink} from "react-router-hash-link";
const styles = {
  linkPages:
    "sm:text-sm text-white py-[2px] px-[8px] hover:text-[#17b5fb] hover:font-semibold",
};

const activeStyle = {
  color: "#17b5fb",
  padding: "2px 8px",
  borderRadius: "4px",
  fontWeight: "bolder",
};

const Navbar = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const {cartProducts, loading, error} = useCart();

  const navigait = useNavigate();
  return (
    <nav className="bg-[#222222] flex justify-between items-center p-4 w-[100%] text-white px-4 sm:px-10 lg:px-20">
      <Link to="/">
        <h2 className="text-[#fff] font-bold text-3xl">Muntajati.</h2>
      </Link>
      <ul className="invisible absolute md:flex-reverse md:items-center gap-2 md:gap-6 md:visible md:static">
        <NavHashLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/#"
          end
          className={styles.linkPages}
        >
          الصفحة الرئيسية
        </NavHashLink>
        <NavHashLink to="/#products" className={styles.linkPages}>
          منتجاتنا
        </NavHashLink>
        <NavHashLink to="/#services" className={styles.linkPages}>
          خدماتنا
        </NavHashLink>

        <NavHashLink to="/#contact" className={styles.linkPages}>
          تواصل معنا
        </NavHashLink>
      </ul>
      <div className="flex gap-2 lg:gap-4">
        <a href="http://wa.me/+9647833205129" target="blank">
          <RiWhatsappFill size={25} className="cursor-pointer" />
        </a>
        <RiInstagramFill size={25} className="cursor-pointer" />
        <TfiMenuAlt
          color="white"
          size={25}
          onClick={() => setNavBarModal(!navbarModal)}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
/* 
        <RiFacebookBoxFill size={25} className="cursor-pointer" />

*/
