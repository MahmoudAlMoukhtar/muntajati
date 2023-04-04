import React from "react";
import {NavHashLink} from "react-router-hash-link";

const activeStyle = {
  color: "#17b5fb",
  padding: "2px 8px",
  borderRadius: "4px",
  fontWeight: "bolder",
};

const styles = {
  linkPages:
    "sm:text-sm text-black py-[2px] px-[8px] hover:text-[#17b5fb] hover:font-semibold",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 ">
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

          <NavHashLink
            to="/contact"
            className={styles.linkPages}
          >
            تواصل معنا
          </NavHashLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
