import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => {
    setnav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] px-4 bg-[#0a192f] flex justify-between items-center text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "120px" }} />
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer">Home</li>
          <li className="px-4 cursor-pointer">About</li>
          <li className="px-4 cursor-pointer">Skills</li>
          <li className="px-4 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
          }
        >
          <li className="px-4 cursor-pointer py-6 text-4xl">Home</li>
          <li className="px-4 cursor-pointer py-6 text-4xl">About</li>
          <li className="px-4 cursor-pointer py-6 text-4xl">Skills</li>
          <li className="px-4 cursor-pointer py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* Social Icons  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-blue-700 flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-red-500 flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
