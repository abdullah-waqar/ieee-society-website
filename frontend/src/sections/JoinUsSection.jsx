import { motion } from 'framer-motion';

export default function JoinUsSection() {
  return (
    <section className="py-16 px-4 sm:px-10 lg:ml-40 lg:mr-40 text-center">
      <h2 className="text-3xl font-bold text-black mb-8">Why Join IEEE?</h2>
      
      <div className="flex flex-col gap-12">
        {/* First Row */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            className="w-full max-w-lg rounded-lg" 
            src="https://img.freepik.com/free-vector/forensic-expert-concept-illustration_114360-15986.jpg?t=st=1751916642~exp=1751920242~hmac=612e9145d21e54565bc4d7fa2fffc3fd6995f17728f88b001fe7200bef907877&w=1380" 
            alt="" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="w-full lg:w-[20rem] text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Enhance your technical skills through hands-on workshops, coding sessions, and real-world projects.
          </motion.p>
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="w-full lg:w-[20rem] text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Network with professionals and peers at IEEE events, tech talks, and conferences.
          </motion.p>
          <motion.img 
            className="w-full max-w-lg rounded-lg" 
            src="https://img.freepik.com/premium-vector/medical-laboratory-results-analyzes-tests-doctor-s-consultation-online-vector-illustration_143808-1023.jpg?w=1380" 
            alt="" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
