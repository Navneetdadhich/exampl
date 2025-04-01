import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="w-full">
  
        <div className="grid w-full md:w-auto grid-cols-3 md:inline-flex border-b border-gray-200 rounded-none mb-6 bg-transparent p-0">
          <button className="text-sm py-3 px-5 rounded-none border-b-2 border-transparent bg-transparent">
            Terms & Conditions
          </button>
          
          <button className="text-sm py-3 px-5 rounded-none border-b-2 border-transparent bg-transparent">
            Attachments
          </button>
          
          <button className="text-sm py-3 px-5 rounded-none border-b-2 border-blue-600 text-blue-600 bg-transparent">
            Customer notes
          </button>
        </div>
        
        
        <div className="tab-content">
          <div>
            <p className="text-gray-700 text-sm">
              The details of the delivery vehicle must be mentioned 24 hours prior to the date of delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;