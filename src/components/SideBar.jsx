import React, { useState } from "react";
import { FaHome, FaShoppingCart, FaBoxOpen, FaTools, FaWarehouse, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdApproval, MdSettings, MdPerson } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { GiSurroundedEye } from "react-icons/gi";

const SideBar = () => {
  const [salesOpen, setSalesOpen] = useState(false);

  const toggleSales = () => {
    setSalesOpen(!salesOpen);
  };

  const salesSubMenu = [
    "Customers",
    "Sales Order",
    "Quotations",
    "Invoices",
    "Payments",
    "Delivery Challan",
    "Credit Notes"
  ];

  const menuItems = [
    { name: "Dashboard", icon: <FaHome className="text-lg" /> },
    { 
      name: "Sales", 
      icon: <MdAutoGraph className="text-lg" />,
      hasSubmenu: true,
      subMenu: salesSubMenu,
      isOpen: salesOpen,
      toggle: toggleSales
    },
    { name: "Purchase", icon: <FaShoppingCart className="text-lg" /> },
    { name: "Inventory", icon: <FaBoxOpen className="text-lg" /> },
    { name: "Products", icon: <FaWarehouse className="text-lg" /> },
    { name: "Approvals", icon: <MdApproval className="text-lg" /> },
    { name: "Manufacturing", icon: <FaTools className="text-lg" /> },
   
  ];

  const bottomItems = [
    { name: "Settings", icon: <MdSettings className="text-lg" /> },
    { name: "Sharath Pawar", icon: <MdPerson className="text-lg h-6 w-6 bg-gray-400 rounded-full " /> },
  ];

  return (
    <div className={`flex flex-col bg-gradient-to-t from-gray-200 border-3 border-white to-purple-50 ${ salesOpen ? "h-[1000px]" : "h-[700px]"}`}>
      <div className="flex flex-col gap-10 w-[200px] p-5">
       
        <div className="flex items-center gap-2 justify-center">
          <GiSurroundedEye className="text-2xl text-blue-600" />
          <h1 className="text-2xl font-bold">Morph</h1>
        </div>

       
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div key={`menu-${index}`}>
              <div 
                className="flex items-center gap-3 p-2 rounded-md hover:bg-indigo-300 cursor-pointer"
                onClick={item.hasSubmenu ? item.toggle : undefined}
              >
                {item.icon}
                <span>{item.name}</span>
                {item.hasSubmenu && (
                  item.isOpen ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />
                )}
              </div>
              
              {item.hasSubmenu && item.isOpen && (
                <div className="ml-7 mt-1 flex flex-col gap-1">
                  {item.subMenu.map((subItem, subIndex) => (
                    <div 
                      key={`submenu-${subIndex}`}
                      className="p-2 text-sm rounded-md hover:bg-indigo-200 cursor-pointer pl-3 transition-all"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

  
      <div className="h-[200px] mt-auto border-t-3 border-white p-5 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          {bottomItems.map((item, index) => (
            <div 
              key={`bottom-${index}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-indigo-300 cursor-pointer"
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
