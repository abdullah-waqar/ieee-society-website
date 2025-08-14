import conferenceImage from '../assets/conference.jpg';
import EventsSection from '../sections/EventsSection';
import Footer from '../sections/Footer';
import GallerySection from '../sections/GallerySection';
const Event = () => {
  return (
<div className="events-page">

      {/* Hero Section */}
      <div
        className="absolute w-full -z-10 top-0 h-[60vh] bg-cover bg-center flex items-center justify-center object-cover"
        style={{
         backgroundImage: `url(${conferenceImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 inset-0 bg-black   opacity-60"></div>
        <h1 className="relative z-10 text-white text-5xl font-bold">Our Events</h1>
      </div>

      {/* Upcoming Events Section */}
      <section className="mt-[60vh] px-10 text-center">
        <h2 className="text-4xl font-bold text-purple-900 mb-6">Upcoming Events</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Join us at our latest events where technology, learning, and networking come together.
        </p>
        {/* Here you can map event cards */}
        <EventsSection isHeading={false} />
      </section>

      {/* Past Events Section */}
      <section className="mt-24 px-10 text-center">
        <h2 className="text-4xl font-bold text-purple-900 mb-6">Past Events</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          A look back at the workshops, hackathons, and webinars we've hosted.
        </p>
        <GallerySection isHeading={false} />
      </section>
      <Footer />
    </div>
  );
}

export default Event