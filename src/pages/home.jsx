import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import { GoLocation } from "react-icons/go";

export const Home = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 md:h-screen py-6 md:py-0 flex flex-col justify-center gap-14 text-center">
        <p className="font-serif text-3xl md:text-5xl tracking-widest leading-loose">
          Welcome to <br /> Palaung Min Thar
        </p>

        <p className=" md:text-xl px-2 leading-relaxed text-gray-300">
          ရှမ်းပြည်နယ်မြောက်ပိုင်း နမ့်ဆန်တအောင်း(ပလောင်)ဒေသထွက်
          အော်ဂဲနစ်လက်ဖက်ခြောက် ဖြန့်ချီရေးလုပ်ငန်း
        </p>

        <Link
          to="https://maps.app.goo.gl/PCctunn537MLyMpy8"
          className="text-white no-underline"
        >
          <div className="ml-2 md:ml-10 flex cursor-pointer gap-2 md:text-lg">
            <GoLocation className="text-2xl text-yellow-400" />

            <p>63(B), 20x21ကြား၊ အောင်မြေသာစံမြို့နယ်၊ မန္တလေးမြို့။</p>
          </div>
        </Link>

        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-36 font-bold p-2 rounded-lg ml-16">
          <Link to="/palaungminthar/shop" className="text-white no-underline">
            Shop Now
          </Link>
        </button>
      </div>

      <div className="md:w-1/2 md:relative ">
        <p className="md:text-xl text-lg z-50 md:absolute top-4 left-8 text-center leading-loose mb-10 md:mb-6">
          သဘာဝရဲ့ အရသာ နမ့်ဆန်တအောင်း(ပလောင်)ဒေသထွက် <br /> အဆင့်မြင့်
          လက်ဖက်ခြောက်
        </p>

        <img
          className="ml-12 mb-10 md:ml-0 md:mb-0 w-52 h-auto rounded-lg rotate-12 md:absolute top-[48%] left-[25%]"
          src={Product1}
        />

        <img
          className="ml-12 mb-10 md:ml-0 md:mb-0 w-52 h-auto rounded-lg -rotate-12 md:absolute top-[20%] left-[50%]"
          src={Product2}
        />

        <img
          className="ml-12 mb-10 md:ml-0 md:mb-0 w-52 h-auto rounded-lg rotate-12 md:absolute top-[20%] left-[10%]"
          src={Product3}
        />
      </div>
    </div>
  );
};
