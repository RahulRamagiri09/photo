// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">Rohith Photography</h1>
//       <ul className="flex space-x-4">
//         <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
//         <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
//         <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

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
      
      {/* Navigation Links */}
      {/* <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
