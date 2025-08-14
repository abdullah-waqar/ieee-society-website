import React from 'react';
import Footer from '../sections/Footer';
import teamBanner from '../assets/team-banner.jpg'; // Optional background image
import ayeshaImg from '../assets/members-images/Ayesha.jpg'
import abdullahImg from '../assets/members-images/abudllahImg.jpg'

// 🔹 Mock data for different roles/teams
const presidentTeam = [
  {
    name: 'Ayesha Khan',
    role: 'President',
    image: ayeshaImg,
    linkedin: '',
  },
  {
    name: '',
    role: 'Vice President',
    image: '',
    linkedin: '',
  },
];

const itTeam = [
  {
    name: 'Abdullah Waqar',
    role: 'IT Director',
    image: abdullahImg,
    linkedin: '',
  },
  {
    name: '',
    role: 'Web Developer',
    image: '',
    linkedin: '',
  },
];

const mediaTeam = [
  {
    name: '',
    role: 'Media Coordinator',
    image: '',
    linkedin: '',
  },
];

const prTeam = [
  {
    name: '',
    role: 'PR Manager',
    image: '',
    linkedin: '',
  },
];

const TeamSection = ({ title, members }) => (
  <section className="mt-16 px-6 ml-40 mb-10">
    <h2 className="text-3xl font-bold text-purple-800 mb-10">{title}</h2>

    {/* Grid Wrapper for centering */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-200"
            />
            <h3 className="text-xl font-semibold text-purple-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);


const Team = () => {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <div className="absolute top-0 w-full h-[50vh]  -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${teamBanner})`,
          }}
        >
          <div className="absolute top-0 inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Meet Our Team</h1>
        </div>
      </div>
          <div className='mt-[50vh]'></div>
      {/* Team Sections */}
      <TeamSection title="President & Vice President" members={presidentTeam} />
      <TeamSection title="IT Team" members={itTeam} />
      <TeamSection title="Media Team" members={mediaTeam} />
      <TeamSection title="PR Team" members={prTeam} />
      <Footer />
    </div>

  );
};

export default Team;
