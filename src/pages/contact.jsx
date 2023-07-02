import React from "react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FaTelegram, FaViber } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { SiWechat } from "react-icons/si";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-stone-800 w-[250px] md:w-[500px] rounded-2xl p-4 md:px-8 shadow-2xl relative">
        <SiWechat className="hidden md:block text-8xl absolute -top-10 text-yellow-400 -left-10" />
        <p className="text-3xl font-serif tracking-widest text-center pb-8">
          Contact Us
        </p>

        <Link
          to="https://maps.app.goo.gl/PCctunn537MLyMpy8"
          className="text-white no-underline"
        >
          <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-6 hover:text-blue-500">
            <GoLocation className="text-2xl text-yellow-400" />

            <p>63(B), 20x21ကြား၊ အောင်မြေသာစံမြို့နယ်၊ မန္တလေးမြို့။</p>
          </div>
        </Link>

        <Link
          to="https://www.facebook.com/profile.php?id=100064007971916&mibextid=ZbWKwL"
          className="text-white no-underline"
        >
          <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-6 hover:text-blue-500">
            <AiFillFacebook className="text-2xl text-blue-600" />

            <p>ပလောင်မင်းသား</p>
          </div>
        </Link>

        <Link className="text-white no-underline">
          <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-6">
            <AiFillPhone className="text-2xl text-yellow-400" />

            <p className="md:hidden">
              09-259384035, <br /> 09-753748700
            </p>

            <p className="hidden md:block">09-259384035, 09-753748700</p>
          </div>
        </Link>

        <Link to="https://t.me/Jerryang7" className="text-white no-underline">
          <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-6 hover:text-blue-500">
            <FaViber className="text-2xl text-purple-700" />
            <FaTelegram className="text-2xl text-blue-500" />
            <p>09-753748700</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
