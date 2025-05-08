import React from 'react';

export const Button = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}
  >
    {children}
  </button>
);
