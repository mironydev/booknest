import React from "react";
import heroIMG from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero bg-base-200 mt-5 md:rounded-2xl">
        <div className="flex items-center flex-col lg:flex-row-reverse gap-10 px-5 pt-5 pb-10 md:p-20">
          <div className=" flex-1 flex justify-end">
            <img src={heroIMG} className="w-fit rounded-lg" />
          </div>
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn bg-green-600 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
