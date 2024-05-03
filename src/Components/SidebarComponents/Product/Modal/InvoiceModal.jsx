// InvoiceModal.jsx
import React from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";

const InvoiceModal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed z-40 inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"}`}>
      <div className="flex Products-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl w-full">
          <div className="flex justify-end p-4">
            <IoCloseCircleSharp onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
