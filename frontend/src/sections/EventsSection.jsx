import { motion } from 'framer-motion';

const events = [
  { title: "How to do Research", date: "Aug 15", description: "4-hour session for innovation." },
  { title: "AI Workshop", date: "Sept 1", description: "Hands-on session on Machine Learning." },
  { title: "How to do Research", date: "Aug 15", description: "4-hour session for innovation." },
  { title: "AI Workshop", date: "Sept 1", description: "Hands-on session on Machine Learning." },
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
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition cursor-pointer"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-700">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
