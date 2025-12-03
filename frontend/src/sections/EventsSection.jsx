import { motion } from 'framer-motion';
import eventImg from '../assets/ieee-event.jpg'
const events = [
   { title: "Explore robotics Fundamentals Hands-on robot configuratoin", date: "December 5 2025", description: "🚀 Get Ready, Innovators! A Big Chance is Coming Your Way! 🤖✨The IEEE Student Branch is bringing an amazing Hands-On Robotics Workshop right to our department — and you are invited!", link:"https://forms.gle/ZFxoSVNkBVspzGjYA", img:"blob:https://web.whatsapp.com/06e93bf2-5ac3-4c58-8e92-bb1b0f328b10" },
  // { title: "AI Workshop", date: "Sept 1", description: "Hands-on session on Machine Learning." },
  // { title: "How to do Research", date: "Aug 15", description: "4-hour session for innovation." },
  // { title: "AI Workshop", date: "Sept 1", description: "Hands-on session on Machine Learning." },
];

export default function EventsSection({ isHeading = true }) {
  const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-16 px-6">
      {isHeading && (
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Upcoming Events
        </h2>
      )}

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {events.length > 0 ? events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition cursor-pointer"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-700">{event.title}</h3>
            <img className='h-[28rem] object-cover object' src={eventImg} alt="Image" />
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
            <p className='bg-green-400 w-[5rem] p-1.5 text-center text-black rounded-2xl'> <a href="https://forms.gle/ZFxoSVNkBVspzGjYA">Join Now</a></p>
          </motion.div>
        )): <div className='flex justify-center items-center  w-[60vw] font-extrabold text-4xl'> <h1>No Events yet, Keep checking</h1> </div>}
      </div>
    </section>
  );
}
