import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 mb-20 w-5xl p-4 mx-5">
      <div className="w-full">
  
        <div className="grid w-full grid-cols-3 md:inline-flex border-b-2 border-blue-200 rounded-none mb-6 bg-transparent p-0">
          <button className="text-sm py-3 px-5 text-gray-400 rounded-none border-b-2 border-transparent bg-transparent cursor-pointer">
            Terms & Conditions
          </button>
          
          <button className="text-sm py-3 px-5 rounded-none border-b-2 border-transparent bg-transparent text-gray-400 cursor-pointer">
            Attachments
          </button>
          
          <button className="text-sm py-3 px-5 rounded-none border-b-4 border-blue-600 text-black font-medium bg-transparent cursor-pointer">
            Customer notes
          </button>
        </div>
        
        
        <div className="tab-content">
          <div>
            <p className="text-gray-700 text-sm font-medium">
              The details of the delivery vehicle must be mentioned 24 hours prior to the date of delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;