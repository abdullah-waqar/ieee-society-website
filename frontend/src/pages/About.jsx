
import { FaLightbulb, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
import Footer from '../sections/Footer';
import GallerySection from '../sections/GallerySection';
import heroImg from '../assets/hero-img.jpeg';
import {motion} from 'framer-motion'
const ValueItem = ({ icon: Icon, label }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-40 m-5"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-purple-100 text-purple-950 rounded-full p-6 text-4xl shadow-md hover:scale-105 transition-transform">
        <Icon />
      </div>
      <p className="mt-4 text-lg font-semibold text-center">{label}</p>
    </motion.div>
  );
};

export const About = () => {
  const heroImage =
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=1470&q=80';

  return (
    <div className="relative">
      {/* Hero Section with background image */}
      <div className="relative w-full h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl mt-4 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our IEEE Student Branch is committed to promoting technical growth,
            leadership, and innovation among students through workshops,
            seminars, and collaborative projects.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-16 px-6 md:px-20 lg:mx-40">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="w-full max-w-4xl h-auto m-auto rounded-xl shadow-lg"
            src={heroImg}
            alt="PAF-IAST Campus"
          />
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mt-16 px-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-purple-950 text-center mb-10">
            Values
          </h1>
          <div className="flex justify-center flex-wrap">
            <ValueItem icon={FaLightbulb} label="Innovation" />
            <ValueItem icon={FaHandsHelping} label="Collaboration" />
            <ValueItem icon={FaLaptopCode} label="Excellence" />
          </div>
        </motion.div>
      </div>

      <GallerySection />
      <Footer />
    </div>
  )};