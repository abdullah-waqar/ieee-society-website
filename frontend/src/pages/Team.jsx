import React from 'react';
import Footer from '../sections/Footer';
import teamBanner from '../assets/team-banner.jpg'; // Optional background image
import ayeshaImg from '../assets/members-images/Ayesha.jpg'
import abdullahImg from '../assets/members-images/abudllahImg.jpg'
import farheenImg from '../assets/members-images/farheen_jadoon.jpg'
import Mubasher from '../assets/members-images/Mubasher.jpg'
import hijabImg from '../assets/members-images/hijab_fatima.jpg'
import hassanMahmood from "../assets/members-images/HassanMahmood.jpeg"
import hanzla from '../assets/members-images/Hanzla.jpg'
import { motion } from 'framer-motion';
import mobeen from '../assets/members-images/mobeen.jpg'
import './teams.css'
// 🔹 Mock data for different roles/teams
const presidentTeam = [
  {
    name: 'Ayesha Khan',
    role: 'President',
    image: ayeshaImg,
    linkedin: '',
  },
  {
    name: "Muhammad Hanzlah",
    role: "Vice President",
    image: hanzla,
    linkedin: ''
  }
  
];

const itTeam = [
  {
    name: 'Abdullah Waqar',
    role: 'IT Director',
    image: abdullahImg,
    linkedin: '',
  },
  
];

const securityTeam = [
  {
    name: 'Mubasher Iqbal',
    role: 'Event Management Director',
    image: Mubasher,
    linkedin: '',
  },
];


const treseuareTeam = [
  {
    name: "Farheen Jadoon",
    role: "Tresurer manager",
    image: farheenImg,
    linkedin: ''
  }
]

const directorSecuity = [
  {
    name: "Hassan Mahmood",
    role: "Director Security",
    image: hassanMahmood,
    linkedin: ''

  }
]

const mediaTeam = [
  {
    name: "Mobeen Sarwar",
    role: "Member Media & Design",
    image: mobeen,
    linkedin: ''

  }
]

  const TeamSection = ({ title, members }) => (
    <section className=" px-6 md:px-10 lg:px-20 mb-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12 text-center lg:text-left">
        {title}
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer border-t-4 border-purple-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-200"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-purple-900 text-center">
                {member.name || 'TBA'}
              </h3>
              <p className="text-gray-600 text-center">{member.role}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const Team = () => {
    return (
       <div className="team-page relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Banner Image */}
        <div
          className="absolute top-0  inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamBanner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Navbar on top of banner */}
        <div className="absolute top-0 left-0 w-full -z-50">
          {/* <Navbar transparent /> Pass a prop to make navbar background transparent */}
        </div>

        {/* Banner Text */}
        <div className="relative  flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h1
            className="text-white z-50 text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl mt-4 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our student branch is full of talented and passionate members ready to innovate and lead.
          </motion.p>
        </div>
      </div>

      <div className="mt-[2vh]"></div>

      {/* Team Sections */}

     
      <TeamSection title="President and Vice President" members={presidentTeam} />


      <TeamSection title="IT Team" members={itTeam} />
      <TeamSection title="Event Management Team" members={securityTeam} />
      <TeamSection title="Media Team" members={mediaTeam} />
      <TeamSection title="Treasure Team" members={treseuareTeam} />
      <TeamSection title="Director Security" members={directorSecuity} />

      <Footer />
    </div>
    );
  };

  export default Team;

  
