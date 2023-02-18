import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const LeftNavbar = () => {
  return (
    <div className="w-1/6 h-[1024px] shadow-md">
        <h2 className="mx-12 my-8 text-lg font-semibold">MK Sounds</h2>
      <ul className="menu text-base-100 ml-16 mt-8">
        <li className="text-[18px]">
          <button className="text-slate-700"> Home</button>
        </li>
        <li className="text-[18px]">
          <button className="text-slate-700"> Explore</button>
        </li>
        <li className="text-[18px]">
          <button className="text-slate-700"> Saved</button>
        </li>
        <li className="text-[18px]">
          <button className="text-slate-700">
            {/* <GiShoppingCart></GiShoppingCart>  */}
            <p>Cart</p>
          </button>
        </li>
        <li className="text-[18px]">
          <button className="text-slate-700"> Selling</button>
        </li>
        <li className="text-[18px]">
          <button className="text-slate-700">Profile</button>
        </li>
        <li className="text-[18px]">
          <button className="text-slate-700"> History</button>
        </li>

        <li className="text-[18px]">
          <Link className="text-slate-700" to="/contact-us">
            Contact Us
          </Link>
        </li>

        <li className="text-[18px]">
          <button className="text-slate-700">Setting</button>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbar;
