import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css3.png";
import Js from "../assets/js.png";
import react from "../assets/react.png";
import Github from "../assets/github.png";
import Illustrator from "../assets/illustrator.png";
import Mysql from "../assets/mysql.png";
import C from "../assets/c++.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-lg">
            Some of the technologies that I have worked with:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={Html} alt="HTML" className=" w-20 mx-auto" />
            <p className="my-6">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={Css} alt="CSS" className=" w-20 mx-auto" />
            <p className="my-6">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={Js} alt="JS" className=" w-20 mx-auto" />
            <p className="my-6">JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={react} alt="ReactJs" className=" w-20 mx-auto" />
            <p className="my-6">React Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={C} alt="C++" className=" w-20 mx-auto" />
            <p className="my-6">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={Mysql} alt="MySQL" className=" w-20 mx-auto" />
            <p className="my-6">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={Illustrator} alt="Illustrator" className=" w-20 mx-auto" />
            <p className="my-6">Illustrator</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img src={Github} alt="Github" className=" w-20 mx-auto" />
            <p className="my-6">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
