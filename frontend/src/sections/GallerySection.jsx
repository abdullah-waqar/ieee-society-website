// components/GallerySection.jsx
const images = ["https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951243.jpg?t=st=1751917302~exp=1751920902~hmac=9213ff2fdf9952942b64c0a40bfff17b66c4281d15d911b80551d7005ad5fbdc&w=1380", "https://img.freepik.com/premium-photo/business-speaker-giving-talk-business-conference-meeting-event_1048944-6968384.jpg?w=900", "https://img.freepik.com/premium-psd/business-people-meeting_53876-1082335.jpg?w=900"];

export default function GallerySection({isHeading=true}) {
  return (
    <section className=" py-16 px-6">
      {isHeading  && <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Event ${i}`} className="rounded shadow-md hover:scale-105 transition-all duration-300 cursor-pointer" />
        ))}
      </div>
    </section>
  );
}
