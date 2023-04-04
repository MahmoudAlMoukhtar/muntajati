import React from "react";
import Spinner from "../../../Spinner";
import {useProducts} from "../../../context/ProductsContext";
import {RiWhatsappFill} from "react-icons/ri";
import {HiMail} from "react-icons/hi";
import {BsFillPhoneFill} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import PageNotFound from "../../../PageNotFound";
import {Link} from "react-router-dom";
function Contact() {
  const {data: products, loading, error} = useProducts();

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return;
  return (
    <section className="bg-[#222222] contanier flex flex-col  md:justify-between  items-center gap-20 px-4 sm:px-8 xl:px-16 pt-10">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h2 className="text-center text-[#17b5fb] font-bold text-6xl">
          تواصل معنا
        </h2>
        <h2 className="text-center text-white font-semibold">
          بعض الطرق للتواصل معنا
        </h2>
      </div>
      <div className="flex flex-col  gap-6 justify-center w-full text-white">
        <div className="flex justify-start gap-4 w-full"></div>
        <form className="flex flex-col gap-10 w-full text-white">
          <div className="flex justify-between gap-10 w-full">
            <input
              type={"text"}
              placeholder="Your Name"
              className="bg-[#393939] w-full p-2 rounded"
              required
            />
            <input
              type={"text"}
              placeholder="Your Email"
              className="bg-[#393939] w-full p-2 rounded"
              required
            />
          </div>
          <input
            type={"text"}
            placeholder="Subject"
            className="bg-[#393939] p-2 rounded"
            required
          />
          <textarea
            type={"text"}
            placeholder="Subject"
            className="bg-[#393939] h-96 p-2 rounded"
            required
          />
          <button className="w-full p-2 bg-[#17b5fb] rounded font-bold">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
