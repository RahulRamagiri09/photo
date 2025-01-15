// // // import React from "react";

// // // const DeveloperCard = () => {
// // //   const developer = {
// // //     name: "John Doe",
// // //     role: "Full Stack Developer",
// // //     description: "Passionate about crafting efficient and scalable web applications.",
// // //     image: `${process.env.PUBLIC_URL}/media/rohith.jpg`,
// // //   };

// // //   return (
// // //     <div
// // //       className="h-screen bg-cover bg-center flex items-center justify-center px-4"
// // //       style={{
// // //         backgroundImage: `url(${process.env.PUBLIC_URL}/media/profile.jpg)`,
// // //       }}
// // //     >
// // //       <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full transform transition-transform hover:scale-105">
// // //         <img
// // //           src={developer.image}
// // //           alt={developer.name}
// // //           className="w-full h-48 object-cover"
// // //         />
// // //         <div className="p-4">
// // //           <h3 className="text-2xl font-bold text-center">{developer.name}</h3>
// // //           <p className="text-blue-600 text-center text-sm">{developer.role}</p>
// // //           <p className="text-gray-600 text-center mt-2 text-sm">
// // //             {developer.description}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DeveloperCard;
// // import React from "react";
// // import { FaLinkedin, FaInstagram } from "react-icons/fa";

// // const DeveloperCard = () => {
// //   const developer = {
// //     name: "John Doe",
// //     role: "Full Stack Developer",
// //     description: "Passionate about crafting efficient and scalable web applications.",
// //     image: `${process.env.PUBLIC_URL}/media/rahul.jpg`,
// //     socialLinks: {
// //       linkedin: "https://www.linkedin.com/in/johndoe",
// //       instagram: "https://www.instagram.com/johndoe",
// //     },
// //   };

// //   return (
// //     <div
// //       className="h-screen bg-cover bg-center flex items-center justify-center px-4"
// //       style={{
// //         backgroundImage: `url(${process.env.PUBLIC_URL}/media/profile.jpg)`,
// //       }}
// //     >
// //       <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full transform transition-transform hover:scale-105">
// //         <img
// //           src={developer.image}
// //           alt={developer.name}
// //           className="w-full object-cover"
// //           style={{ height: "500px" }}
// //         />
// //         <div className="p-6 text-center">
// //           <h3 className="text-3xl font-bold">{developer.name}</h3>
// //           <p className="text-blue-600 text-lg">{developer.role}</p>
// //           <p className="text-gray-600 mt-4">{developer.description}</p>
// //           <div className="mt-6 flex justify-center space-x-4">
// //             <a
// //               href={developer.socialLinks.linkedin}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-500 hover:text-blue-700"
// //             >
// //               <FaLinkedin size={28} />
// //             </a>
// //             <a
// //               href={developer.socialLinks.instagram}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-pink-500 hover:text-pink-700"
// //             >
// //               <FaInstagram size={28} />
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DeveloperCard;
// import React from "react";
// import { FaLinkedin, FaInstagram } from "react-icons/fa";

// const DeveloperCard = () => {
//   const developer = {
//     name: "John Doe",
//     role: "Full Stack Developer",
//     description: "Passionate about crafting efficient and scalable web applications.",
//     image: `${process.env.PUBLIC_URL}/media/rahul.jpg`,
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/in/johndoe",
//       instagram: "https://www.instagram.com/johndoe",
//     },
//   };

//   return (
//     <div
//       className="h-screen bg-cover bg-center flex items-center justify-center px-4"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/media/profile.jpg)`,
//       }}
//     >
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full transform transition-transform hover:scale-105">
//         <img
//           src={developer.image}
//           alt={developer.name}
//           className="w-full object-cover"
//           style={{ height: "400px" }} // Adjusted height for a balanced look
//         />
//         <div className="p-6 text-center">
//           <h3 className="text-2xl font-bold">{developer.name}</h3>
//           <p className="text-blue-600 text-lg">{developer.role}</p>
//           <p className="text-gray-600 mt-4">{developer.description}</p>
//           <div className="mt-6 flex justify-center space-x-4">
//             <a
//               href={developer.socialLinks.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-700"
//             >
//               <FaLinkedin size={28} />
//             </a>
//             <a
//               href={developer.socialLinks.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-pink-500 hover:text-pink-700"
//             >
//               <FaInstagram size={28} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeveloperCard;

// import React from 'react';

// const DeveloperCard = () => {
//   const profiles = [
//     {
//       id: 1,
//       name: "Rohith Ramagiri",
//       role: "Licensed Drone Pilot",
//       description:
//         "I have a keen interest in photography and excel at capturing unforgettable memories. With expertise in drone operations and visual storytelling, I specialize in creating stunning imagery.",
//       image: `${process.env.PUBLIC_URL}/media/rohith.jpg`, // Replace with actual image path
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex justify-center items-center"
//       style={{
//         backgroundImage: `url('${process.env.PUBLIC_URL}/media/profile.jpg')`, // Replace with the background image path
//       }}
//     >
//       <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-md">
//         {profiles.map((profile) => (
//           <div key={profile.id} className="flex flex-col items-center">
//             <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
//               <img
//                 src={profile.image}
//                 alt={profile.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 text-center">
//               {profile.name}
//             </h3>
//             <p className="text-sm text-gray-600 text-center italic">
//               {profile.role}
//             </p>
//             <p className="text-gray-600 text-center mt-4 leading-relaxed">
//               {profile.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DeveloperCard;


import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const DeveloperCard = () => {
  const profiles = [
    {
        id: 1,
        name: "Rahul Ramagiri",
        role: "Full Stack Developer",
        description:
          "Passionate Full Stack Developer with expertise in building scalable web applications, from front-end interfaces to back-end solutions, ensuring seamless user experiences and efficient performance.",
        image: `${process.env.PUBLIC_URL}/media/rahul.jpg`, // Replace with the actual image path
        socialLinks: {
          linkedin: "www.linkedin.com/in/rahul-ramagiri-782a85189",
          instagram: "https://www.instagram.com/rahulramagiri",
        },
      }
      
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/media/fullStack.jpg')`, // Replace with the background image path
      }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-md w-full">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center">
            {/* Increased Circle Size */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              {profile.name}
            </h3>
            <p className="text-md text-gray-600 text-center italic">
              {profile.role}
            </p>
            <p className="text-gray-600 text-center mt-4 leading-relaxed">
              {profile.description}
            </p>
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;
