import { motion } from 'framer-motion';

export default function AboutSection() {
  const images = [
    "https://images.unsplash.com/photo-1742505709415-76b15647ae64?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1749738505157-2d8142c1545f?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1749740436817-60414cc23115?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1749427861553-9375109ee983?w=600&auto=format&fit=crop&q=60",
  ];

  const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-40 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        About IEEE Pak-Austria Fachhochschule
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        We are the IEEE Student Branch of Pak-Austria Fachhochschule. Our mission is to foster innovation, knowledge sharing, and professional growth through workshops, events, and collaboration.
      </p>

      {/* Grid starts here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <motion.img
            {...animationProps}
            src={images[0]}
            alt="Event 1"
            className="w-full h-48 sm:h-56 lg:h-48 object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer"
          />
          <motion.img
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.1 }}
            src={images[1]}
            alt="Event 2"
            className="w-full h-48 sm:h-56 lg:h-48 object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <motion.img
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.2 }}
            src={images[2]}
            alt="Event 3"
            className="w-full h-48 sm:h-56 lg:h-48 object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer"
          />
          <motion.img
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.3 }}
            src={images[3]}
            alt="Event 4"
            className="w-full h-48 sm:h-56 lg:h-48 object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer"
          />
        </div>

        {/* Column 3 - Big Image */}
        <motion.div
          {...animationProps}
          transition={{ ...animationProps.transition, delay: 0.4 }}
          className="row-span-1 md:row-span-2"
        >
          <img
            src={images[4]}
            alt="Big Event"
            className="w-full h-64 sm:h-80 md:h-[25rem] object-cover rounded hover:scale-105 transition-all duration-300 cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
}
