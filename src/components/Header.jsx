import React from "react";
import Electronics from "../images/electronics.png";

function Header() {
  return (
    <div className="w-full flex flex-col items-center justify-evenly mt-10 shadow-xl md:flex-row md:items-center">
      <div className="text-center md:text-left md:flex md:flex-col md:items-center">
        <p className="text-3xl p-4">
          Welcome To Smart-<span className="text-pink-500">Tech</span> Kenya.
          Your home of Electronics
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mt-2">
          Shop Now
        </button>
      </div>

      <img className="p-4 md:w-1/2" src={Electronics} alt="My Electronics" />
    </div>
  );
}

export default Header;
