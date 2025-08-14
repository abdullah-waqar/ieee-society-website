// components/JoinUsSection.jsx
export default function JoinUsSection() {
  return (
    <section className=" py-16 ml-40 mr-40   text-center">
      <h2 className="text-3xl font-bold text-black mb-4">Why Join IEEE?</h2>
      
      <div>
        <div className="flex justify-between">
            <img className="w-[35rem]" src="https://img.freepik.com/free-vector/forensic-expert-concept-illustration_114360-15986.jpg?t=st=1751916642~exp=1751920242~hmac=612e9145d21e54565bc4d7fa2fffc3fd6995f17728f88b001fe7200bef907877&w=1380" alt="" />
            <p className="m-auto w-[20rem]  text-[1.5rem]">Enhance your technical skills through hands-on workshops, coding sessions, and real-world projects.</p>
        </div>

         <div className="flex justify-between">
            <p className="m-auto w-[20rem]  text-[1.5rem]">Network with professionals and peers at IEEE events, tech talks, and conferences.</p>
            <img className="w-[35rem]" src="https://img.freepik.com/premium-vector/medical-laboratory-results-analyzes-tests-doctor-s-consultation-online-vector-illustration_143808-1023.jpg?w=1380" alt="" />
        </div>
      </div>
     
    </section>
  );
}
