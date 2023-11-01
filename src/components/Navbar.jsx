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
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => {
    setnav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] px-4 bg-[#0a192f] flex justify-between items-center text-gray-300">
      <div>
      <Link to="home" smooth={true} duration={700}>
        <img className="hover:cursor-pointer" src={Logo} alt="Logo" style={{ width: "120px" }} />
        </Link>
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex font-semibold text-2xl">
          <li className="px-4 cursor-pointer">
            <Link to="home" smooth={true} duration={700}>
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="about" smooth={true} duration={700}>
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="skills" smooth={true} duration={700}>
              Skills
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="projects" smooth={true} duration={700}>
              Projects
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="contact" smooth={true} duration={700}>
              Contact
            </Link>
          </li>
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
          <li className="px-4 cursor-pointer py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={700}
            >
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={700}
            >
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={700}
            >
              Skills
            </Link>
          </li>
          <li className="px-4 cursor-pointer py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={700}
            >
              Projects
            </Link>
            </li>
          <li className="px-4 cursor-pointer py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={700}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-blue-700 flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/aashish-katila-1361241a3/" target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AashishKatila" target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-red-500 flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:aashishkatila@gmail.com" target="_blank"
            >
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="px-4 cursor-pointer w-[160px] h-[60px] bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/Aashis03" target="_blank"
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
