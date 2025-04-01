import React from 'react';
import { FaBox, FaFileInvoice, FaEdit, FaArchive, FaDownload, FaPrint } from "react-icons/fa";

const TextBox = ({ username = "Fakedata" }) => {
 
  const getIcon = () => {
    switch (username.toLowerCase()) {
      case 'create invoice':
        return <FaFileInvoice className='text-sm flex-shrink-0' />;
      case 'edit':
        return <FaEdit className='text-sm flex-shrink-0' />;
      case 'archive':
        return <FaArchive className='text-sm flex-shrink-0' />;
      case 'download':
        return <FaDownload className='text-sm flex-shrink-0' />;
      case 'print':
        return <FaPrint className='text-sm flex-shrink-0' />;
      default:
        return <FaBox className='text-sm flex-shrink-0' />;
    }
  };

  const getClasses = () => {
    const baseClasses = 'flex items-center justify-center gap-4 h-9 min-w-[150px] p-2 rounded-lg cursor-pointer';
    
    if (username.toLowerCase() === 'create invoice') {
      return `${baseClasses} bg-indigo-500 text-white hover:bg-indigo-600 border-2 border-blue-600 shadow-lg`;
    }
    if (username.toLowerCase() === 'edit') {
      return `${baseClasses} border-2 border-gray-500`;
    }
    if (username.toLowerCase() === 'archive') {
      return `${baseClasses} border-2 border-gray-500`;
    }
    
    return `${baseClasses} hover:bg-gray-300`;
  };

  return (
    <div className={getClasses()}>
      {getIcon()}
      <p className='overflow-hidden text-md'>{username}</p>
    </div>
  );
};

export default TextBox;