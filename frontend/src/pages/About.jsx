// import { FaLightbulb, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
// import Footer from '../sections/Footer';
// import GallerySection from '../sections/GallerySection';

// const ValueItem = ({ icon: Icon, label , color }) => {
//   return (
//     <div className="flex flex-col items-center w-40 m-5">
//       <div className={`bg-purple-100 text-purple-950 rounded-full p-6 text-4xl shadow-md hover:scale-105 transition-transform`}>
//         <Icon />
//       </div>
//       <p className="mt-4 text-lg font-semibold text-center">{label}</p>
//     </div>
//   );
// };

// export const About = () => {
//   let src = "https://videos.openai.com/vg-assets/assets%2Ftask_01k0cc7zgyemereh7kh5tv6eh5%2F1752762239_img_0.webp?st=2025-07-17T13%3A11%3A53Z&se=2025-07-23T14%3A11%3A53Z&sks=b&skt=2025-07-17T13%3A11%3A53Z&ske=2025-07-23T14%3A11%3A53Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=vRdCvrcsPcXilZx2BAfEXLENtOgEXi1T53xrtbTZoxw%3D&az=oaivgprodscus"
//   return (
//     <div className="">
//       <div className='bg-blue-50 w-full h-[6rem] -z-10 absolute top-0'></div>
//       {/* Top Section */}
//       <div className="flex justify-between mx-40 mt-10">
//         <h1 className="text-6xl text-purple-950 mt-10">About Us</h1>
//         <p className="w-[30rem] mt-5 leading-[1.5rem] text-[1.1rem]">
//           Our IEEE Student Branch is committed to promoting technical growth, leadership, and innovation among students through workshops, seminars, and collaborative projects.
//         </p>
//       </div>

//       {/* Image */}
//       <img
//         className="h-[30rem] m-auto mt-10"
//         src={src}
//         alt="IEEE Society"
//       />

//       {/* Values Section */}
//       <div className="mt-16">
//         <h1 className="text-6xl text-purple-950 text-center mb-10">Values</h1>
//         <div className="flex justify-center flex-wrap">
//           <ValueItem icon={FaLightbulb} label="Innovation" />
//           <ValueItem icon={FaHandsHelping} label="Collaboration"  />
//           <ValueItem icon={FaLaptopCode} label="Excellence" />
//         </div>
//       </div>
//       <GallerySection />
//       <Footer />
//     </div>
//   );
// };


import { FaLightbulb, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
import Footer from '../sections/Footer';
import GallerySection from '../sections/GallerySection';

const ValueItem = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center w-40 m-5">
      <div className="bg-purple-100 text-purple-950 rounded-full p-6 text-4xl shadow-md hover:scale-105 transition-transform">
        <Icon />
      </div>
      <p className="mt-4 text-lg font-semibold text-center">{label}</p>
    </div>
  );
};

export const About = () => {
  let src =
    'https://videos.openai.com/vg-assets/assets%2Ftask_01k0cc7zgyemereh7kh5tv6eh5%2F1752762239_img_0.webp?st=2025-07-17T13%3A11%3A53Z&se=2025-07-23T14%3A11%3A53Z&sks=b&skt=2025-07-17T13%3A11%3A53Z&ske=2025-07-23T14%3A11%3A53Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=vRdCvrcsPcXilZx2BAfEXLENtOgEXi1T53xrtbTZoxw%3D&az=oaivgprodscus';

  return (
    <div>
      {/* Background strip */}
      <div className="bg-blue-50 w-full h-[6rem] -z-10 absolute top-0"></div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 md:px-20 lg:mx-40 mt-10 gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-purple-950 mt-4 lg:mt-10 text-center lg:text-left">
          About Us
        </h1>
        <p className="w-full lg:w-[30rem] mt-2 lg:mt-5 leading-[1.5rem] text-base md:text-lg text-center lg:text-left">
          Our IEEE Student Branch is committed to promoting technical growth, leadership, and innovation among students through workshops, seminars, and collaborative projects.
        </p>
      </div>

      {/* Image */}
      <img
        className="w-full max-w-4xl h-auto m-auto mt-10 px-4"
        src={src}
        alt="IEEE Society"
      />

      {/* Values Section */}
      <div className="mt-16 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-purple-950 text-center mb-10">
          Values
        </h1>
        <div className="flex justify-center flex-wrap">
          <ValueItem icon={FaLightbulb} label="Innovation" />
          <ValueItem icon={FaHandsHelping} label="Collaboration" />
          <ValueItem icon={FaLaptopCode} label="Excellence" />
        </div>
      </div>

      <GallerySection />
      <Footer />
    </div>
  );
};
