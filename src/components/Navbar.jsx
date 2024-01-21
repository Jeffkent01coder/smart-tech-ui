import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex bg-pink-500 h-14 items-center justify-between ${
        scrolling ? "fixed top-0 z-10" : ""
      }`}>
      <h2 className="text-white font-bold ml-4 text-lg md:text-sm lg:text-xl cursor-pointer">
        Smart-<span className="text-blue-700 italic">Tech</span> Kenya
      </h2>

      <ul
        className={`flex p-2 md:flex hidden ${
          open ? "absolute w-full top" : "hidden"
        }`}>
        <Link to='/' className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          Home
        </Link>
        <Link to='/products' className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          Products
        </Link>
        <Link to='/about' className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          About
        </Link>
        <Link to='/contact' className="ml-2 text-white text-xl p-2 md:p-3 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out rounded-full cursor-pointer">
          Contacts
        </Link>
      </ul>

      <div className="flex p-2 md:p-3">
        <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-1 md:px-3 lg:px-4 rounded">
          Login
        </Link>
        {/* <button className="bg-transparent ml-2 md:ml-3 hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-1 md:py-1 md:px-2 lg:px-3 border border-blue-500 hover:border-transparent rounded">
          Cart: <span>10</span>
        </button> */}
      </div>

      <BiMenu
        onClick={handleMenu}
        className="text-white text-3xl mr-4 md:hidden"
      />
    </nav>
  );
}

export default Navbar;
