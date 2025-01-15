import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img 
          src={`${process.env.PUBLIC_URL}/media/logo.jpg`} 
          alt="Logo" 
          className="h-10 w-10 object-cover" 
        />
        <h1 className="text-2xl font-bold">Rohith Photography</h1>
      </div>
    </nav>
  );
};

export default Navbar;
