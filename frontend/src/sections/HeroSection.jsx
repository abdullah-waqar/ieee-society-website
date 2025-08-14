// import Navbar from '../components/Navbar'

// const HeroSection = () => {
//   return (
//     <div className='bg-black text-white pb-10 h-[100%]'>
//         {/* NAVBAR */}
//         <Navbar />

//         {/* Body */}

//         <div className='ml-40 mr-40 mt-40 flex flex-col ml-4 lg:flex-row justify-between '>
//             <img className='h-[25rem] rounded-br-2xl rounded-tl-2xl shadow-md' src="https://img.freepik.com/free-vector/employee-celebration-concept-illustration_114360-14531.jpg?t=st=1751888473~exp=1751892073~hmac=0cb404e863e3487b1fac846323ec812558b6927dc164886e926ee358813ad937&w=1380" alt="" />

//             <div className='w-[30rem]  md:m-auto  mt-5'>
//                 <h4 className='text-[0.8rem] text-gray-400'>Society</h4>
//                 <h1 className='text-3xl'>IEEE Society</h1>
//                 <p className='mt-3 text-gray-400'> IEEE is the world’s largest technical professional organization, and our student branch is dedicated to fostering innovation, leadership, and collaboration in engineering and technology. We organize workshops, competitions, tech talks, and hands-on sessions to empower students beyond the classroom.</p>

//             </div>
//         </div>

//     </div>
//   )
// }

// export default HeroSection


// import Navbar from '../components/Navbar'

// const HeroSection = () => {
//   return (
//     <div className='bg-black text-white pb-10 min-h-screen'>
//       {/* NAVBAR */}
//       <Navbar />

//       {/* Body */}
//       <div className='px-4 sm:px-10 lg:px-40 mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8'>
//         {/* Image */}
//         <img 
//           className='w-full max-w-md lg:max-w-lg rounded-br-2xl rounded-tl-2xl shadow-md' 
//           src="https://img.freepik.com/free-vector/employee-celebration-concept-illustration_114360-14531.jpg?t=st=1751888473~exp=1751892073~hmac=0cb404e863e3487b1fac846323ec812558b6927dc164886e926ee358813ad937&w=1380" 
//           alt="IEEE Society" 
//         />

//         {/* Text Section */}
//         <div className='w-full lg:w-[30rem] text-center lg:text-left'>
//           <h4 className='text-[0.8rem] text-gray-400'>Society</h4>
//           <h1 className='text-3xl font-semibold'>IEEE Society</h1>
//           <p className='mt-3 text-gray-400'>
//             IEEE is the world’s largest technical professional organization, and our student branch is dedicated to fostering innovation, leadership, and collaboration in engineering and technology. We organize workshops, competitions, tech talks, and hands-on sessions to empower students beyond the classroom.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setShowModal(false);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000); // Hide success banner after 3s
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black text-white">
      <Navbar />

      {/* 3D Background */}
      <div className="absolute bottom-0 mt-10 inset-0 -z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={3}>
            <MeshDistortMaterial
              color="#7c3aed"
              attach="material"
              distort={0.7}
              speed={1.4}
              roughness={0.9}
            />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Success Banner */}
      <AnimatePresence>
        {subscribed && (
          <motion.div
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            Subscribed!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-0 px-4 sm:px-10 lg:px-40 mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        {/* Image */}
        <motion.img
          className="w-full max-w-md lg:max-w-lg rounded-br-2xl rounded-tl-2xl shadow-xl"
          src="https://img.freepik.com/free-vector/employee-celebration-concept-illustration_114360-14531.jpg"
          alt="IEEE Society"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[30rem] text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Society</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IEEE Society</h1>
          <p className="mt-3 text-gray-300 text-base md:text-lg mb-6">
            IEEE is the world’s largest technical professional organization, and our student branch
            is dedicated to fostering innovation, leadership, and collaboration in engineering
            and technology. We organize workshops, competitions, tech talks, and hands-on sessions
            to empower students beyond the classroom.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
          >
            Join Us
          </button>
        </motion.div>
      </div>

      {/* Join Us Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-sm w-full shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900">Subscribe</h2>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubscribe}
                className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full cursor-pointer mt-2 text-gray-600 hover:text-gray-800 underline"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
