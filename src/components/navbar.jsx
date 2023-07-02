import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo1.jpg";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiFillContacts,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

export const Navbar = () => {
  const linkStyle =
    "bg-[#13ad3c] p-1 tracking-wider md:flex md:gap-4 md:pl-6 text-sm md:text-lg text-white no-underline";

  const iconStyle = "text-2xl ml-3 mb-1";

  const location = useLocation();

  return (
    <div className="w-16 md:w-60 flex flex-col h-screen bg-[#0c6122] sticky top-0">
      <div>
        <div className="w-16 h-16 md:w-48 md:h-48 mx-auto rounded-full relative overflow-hidden my-4">
          <img src={Logo} alt="logo" />
        </div>
        <p className="hidden md:block text-xl font-serif font-bold text-white text-center tracking-wider">
          PaLaung Min Thar
        </p>
      </div>

      <div className="flex flex-col flex-grow justify-evenly text-center text-white text-lg">
        <Link
          to="/palaungminthar"
          className={
            location.pathname === "/palaungminthar"
              ? `${linkStyle} rounded-e-2xl bg-[#343a40]`
              : `${linkStyle} rounded-xl`
          }
        >
          <AiFillHome className={iconStyle} /> <p className="m-0">Home</p>
        </Link>

        <Link
          to="/palaungminthar/shop"
          className={
            location.pathname === "/palaungminthar/shop"
              ? `${linkStyle} rounded-e-2xl bg-[#343a40]`
              : `${linkStyle} rounded-xl`
          }
        >
          <AiOutlineShoppingCart className={iconStyle} />{" "}
          <p className="m-0">Shop</p>
        </Link>

        <Link
          to="/palaungminthar/blog"
          className={
            location.pathname === "/palaungminthar/blog"
              ? `${linkStyle} rounded-e-2xl bg-[#343a40]`
              : `${linkStyle} rounded-xl`
          }
        >
          <FaBlog className={iconStyle} /> <p className="m-0">Blog</p>
        </Link>

        <Link
          to="/palaungminthar/contact"
          className={
            location.pathname === "/palaungminthar/contact"
              ? `${linkStyle} rounded-e-2xl bg-[#343a40]`
              : `${linkStyle} rounded-xl`
          }
        >
          <AiFillContacts className={iconStyle} />{" "}
          <p className="hidden md:block m-0">Contact Us</p>
          <p className="md:hidden text-sm m-0">Contact</p>
        </Link>

        <Link
          to="/palaungminthar/about"
          className={
            location.pathname === "/palaungminthar/about"
              ? `${linkStyle} rounded-e-2xl bg-[#343a40]`
              : `${linkStyle} rounded-xl`
          }
        >
          <FcAbout className={iconStyle} />{" "}
          <p className="hidden md:block m-0">About Us</p>
          <p className="md:hidden m-0">About</p>
        </Link>
      </div>
    </div>
  );
};
