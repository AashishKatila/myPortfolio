import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen pt-[100px] px-10 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#db3a34] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Aashish Katila
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400 ">
          I'm a Web developer
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          minus perferendis expedita voluptas explicabo sint iste. Voluptate
          aperiam maiores explicabo?
        </p>
        <div>
          <button className="group text-white border-2 p-3 flex items-center hover:bg-[#db3a34] hover:border-[#db3a34] ">
            See More <HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
