
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Shop = ({ data }) => {
  

  return (
    <div className="w-full min-h-screen">
      <div className="w-[90%] md:w-[80%] mx-auto pb-4">
        <h1 className="text-2xl py-2 font-bold font-mono text-center">
          Welcome to Palaung Min Thar's Shop
        </h1>

        <p className="text-xl text-center text-amber-400 tracking-wider">
          Happy Shopping...
        </p>

        <div className="flex flex-wrap gap-4 gap-x-8 justify-center md:justify-between">
          {data.map((shop, index) => {
            return (
              <div
                key={index}
                className="w-44 md:w-56 mb-4 md:mb-0 md:mx-0 text-center border-2 rounded-xl flex flex-col justify-between"
              >
                <div className="w-full h-60 md:h-80">
                  <img
                    src={shop.image}
                    className="w-full h-full md:h-auto rounded-t-lg"
                  />
                </div>

                <div className="">
                  <h1 className="font-bold text-lg leading-8 my-2">
                    {shop.name}
                  </h1>

                  <p className="font-sans text-amber-400">{shop.description}</p>

                  <p className="font-sans text-xl text-[#00FF00]">
                    {shop.price} MMK
                  </p>
                </div>

                <div className="flex justify-center m-2">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100064007971916&mibextid=ZbWKwL"
                    className="btn btn-primary"
                  >
                    Message
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
