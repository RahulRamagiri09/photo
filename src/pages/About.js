// import React from 'react';

// const AboutUs = () => {
//   const profiles = [
//     {
//       id: 1,
//       name: "Rohith Ramagiri",
//       role: "Certified Drone Pilote",
//       description:
//         "I have a keen interest in photography and excel at capturing unforgettable memories. With expertise in drone operations and visual storytelling, I specialize in creating stunning imagery.",
//       image: `${process.env.PUBLIC_URL}/media/s1.jpg`, // Replace with actual image path
//     }
//   ];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="grid grid-cols-1 gap-8 max-w-5xl">
//         {profiles.map((profile) => (
//           <div
//           key={profile.id}
//           className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center min-h-[400px]" // Adjusted height
//         >
//           <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
//             <img
//               src={profile.image}
//               alt={profile.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 text-center">
//             {profile.name}
//           </h3>
//           <p className="text-sm text-gray-600 text-center italic">
//             {profile.role}
//           </p>
//           <p className="text-gray-600 text-center mt-4 leading-relaxed">
//             {profile.description}
//           </p>
//         </div>
        
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
  const profiles = [
    {
      id: 1,
      name: "Rohith Ramagiri",
      role: "Licensed Drone Pilot",
      description:
        "I have a keen interest in photography and excel at capturing unforgettable memories. With expertise in drone operations and visual storytelling, I specialize in creating stunning imagery.",
      image: `${process.env.PUBLIC_URL}/media/rohith.jpg`, // Replace with actual image path
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/media/profile.jpg')`, // Replace with the background image path
      }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-md">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {profile.name}
            </h3>
            <p className="text-sm text-gray-600 text-center italic">
              {profile.role}
            </p>
            <p className="text-gray-600 text-center mt-4 leading-relaxed">
              {profile.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
