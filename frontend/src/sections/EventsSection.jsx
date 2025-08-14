// components/EventsSection.jsx
const events = [
  { title: "How to do Research", date: "Aug 15", description: "4-hour session for innovation." },
  { title: "AI Workshop", date: "Sept 1", description: "Hands-on session on Machine Learning." },
  { title: "How to do Research", date: "Aug 15", description: "4-hour session for innovation." },
  { title: "AI Workshop", date: "Sept 1", description: "Hands-on session on Machine Learning." },
];

export default function EventsSection({isHeading=true}) {
  return (
    <section className=" py-16 px-6">
     {isHeading && <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Upcoming Events</h2> }
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
