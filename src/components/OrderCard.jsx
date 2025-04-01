import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const OrderCard = ({ title, value, trend, border = true }) => {
  return (
    <div className={`px-4 py-2 ${border ? 'border-r border-gray-200' : ''}`}>
      <h3 className="text-xs text-gray-500">{title}</h3>
      <div className="flex items-center mt-1">
        <span className="text-lg font-semibold">{value}</span>
        {trend && (
          <span className={`ml-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        )}
      </div>
    </div>
  );
};

export default OrderCard;