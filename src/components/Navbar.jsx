import React from "react";
import { FaBell, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  const navItems = [
    { name: "Overview", active: false },
    { name: "Sales Order", active: true },
    { name: "Quotations", active: false },
    { name: "Invoice", active: false },
    { name: "Payments", active: false },
    { name: "Mails", active: false },
  ];

  return (
    <nav className="flex flex-col gap-6 w-full border-b-2 border-blue-200">
    
      <div className="flex justify-between items-center p-4">
        
        <div className="flex items-center gap-3">
          <FaArrowRight className="text-2xl" />
          <div className="flex items-center gap-2">
            <p>Sales</p>
            <IoIosArrowForward />
            <p>Sales Order</p>
            <IoIosArrowForward />
            <p className="text-indigo-500">XYZ Pharmaxy Pvt. Ltd.</p>
          </div>
        </div>

        
        <div className="flex items-center gap-4">
        
          <div className="flex items-center bg-white gap-2 border border-gray-300 rounded-lg p-2 w-[300px]">
            <MdOutlineSearch className="text-2xl text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 outline-none text-sm" 
            />
          </div>

          
          <div className="relative">
            <FaBell className="text-2xl cursor-pointer" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-600"></span>
          </div>
        </div>
      </div>

     
      <div className="flex gap-10 ml-3">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`pb-2 cursor-pointer ${
              item.active 
                ? "border-b-4 border-blue-500 font-medium" 
                : "text-gray-400"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
