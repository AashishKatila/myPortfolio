import React,{useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setnav] = useState(false)
  const handleClick = () =>{
    setnav(!nav)
  }
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
        {!nav ?<FaBars/>:<FaTimes/>}
        
      </div>

      {/* Mobile Menu */}
      <div>
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
        <li className="px-4 cursor-pointer py-6 text-4xl">Home</li>
        <li className="px-4 cursor-pointer py-6 text-4xl">About</li>
        <li className="px-4 cursor-pointer py-6 text-4xl">Skills</li>
        <li className="px-4 cursor-pointer py-6 text-4xl">Contact</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
