import React from "react";
import { FaHome, FaShoppingCart, FaBoxOpen, FaTools, FaWarehouse } from "react-icons/fa";
import { MdApproval, MdSettings, MdPerson } from "react-icons/md";
import { GiSurroundedEye } from "react-icons/gi";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome className="text-lg" /> },
    { name: "Purchase", icon: <FaShoppingCart className="text-lg" /> },
    { name: "Inventory", icon: <FaBoxOpen className="text-lg" /> },
    { name: "Products", icon: <FaWarehouse className="text-lg" /> },
    { name: "Approvals", icon: <MdApproval className="text-lg" /> },
    { name: "Manufacturing", icon: <FaTools className="text-lg" /> },
    { name: "Inventory", icon: <FaBoxOpen className="text-lg" /> },
  ];

  const bottomItems = [
    { name: "Setting", icon: <MdSettings className="text-lg" /> },
    { name: "User Name", icon: <MdPerson className="text-lg" /> },
  ];

  return (
    <div className="flex flex-col bg-purple-50 h-screen">
      <div className="flex flex-col gap-10 w-[200px] p-5">
       
        <div className="flex items-center gap-2 justify-center">
          <GiSurroundedEye className="text-2xl" />
          <h1 className="text-2xl font-medium">Morph</h1>
        </div>

       
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div 
              key={`menu-${index}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-300 cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

  
      <div className="mt-auto border-t-2 border-white p-5">
        <div className="flex flex-col gap-2">
          {bottomItems.map((item, index) => (
            <div 
              key={`bottom-${index}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-300 cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
