import { useState } from "react";
import { Github } from 'lucide-react';

import profileImg from "../assets/Gemini_Generated_Image_9bfn7v9bfn7v9bfn.png";
import profileImg2 from "../assets/Screenshot 2026-01-26 013650.png";
import profileImg3 from "../assets/Gemini_Generated_Image_duoxk4duoxk4duox.png";

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hookPro,setHookPro] = useState(null);

  const projects = [
    {
      img: profileImg,
      defaultText: "Hospital Management System",
      modalText: "The main goal of your Hospital Management System is to: Replace manual paperwork with an organized digital system. Allow quick access to patient and doctor information. Reduce human error in hospital processes. Improve coordination between different hospital departments (e.g., admissions, prescriptions, billing)",
         github: "https://github.com/Gopalbhople1208/Hospital_Management_System",
    },
    {
      img: profileImg2,
      defaultText: "User Search & Filter",
      modalText: "Searching: Users can type keywords to find exact or related results.Filtering: Users can narrow down results using multiple criteria like date, category, status, or other attributes. Improved usability: Saves time and effort by showing only the most relevant information.Better data management: Helps organizations and applications manage large datasets efficiently.",
      github:"https://github.com/Gopalbhople1208/user-searching",   
    },
    {
      img: profileImg3,
      defaultText: "Bus Ticket Booking System",
      modalText: "The purpose of this project is to allow passengers to book bus tickets online easily. It helps users search buses, choose seats, and make payments without visiting the bus station. It also helps bus operators manage schedules, seat availability, and bookings efficiently.",
    github:"https://github.com/Gopalbhople1208/busTicketBooking",
    },
  ];

  return (
     <div className="bg-white select-none contextmenu keydown dragstart m-4 lg:m-7 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.5)] px-6 lg:px-12 py-12 lg:py-16">

    <h1 className="text-3xl lg:text-5xl font-bold mb-10">My Work</h1>

  
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-8">
      {projects.map((item, index) => (
        <div key={index} className="">
          
          <img
            src={item.img}
            alt="project"
           

            onClick={() => setActiveProject(item)}
              

            
             className="
              w-full h-64 object-cover rounded-xl
              cursor-pointer transition
              hover:scale-105
              active:scale-95
            "
          />


                 <div className="mt-4 flex items-center justify-between gap-3">
  
  <p className="text-gray-700 font-medium text-sm sm:text-base leading-snug">
    {item.defaultText}
  </p>

<button
  onClick={(e) => {
    e.stopPropagation(); 
    window.open(item.github, "_blank");
  }}
  className="
    flex-shrink-0
    p-2
    border
    rounded-full
    hover:shadow-md
    hover:bg-gray-100
    transition
    active:scale-95
  "
  aria-label="View GitHub Repository"
>
  <Github size={18} />
</button>


</div>

      


        </div>
      ))}
    </div>

    <div className="flex justify-center mt-14">
      <button
        onClick={() =>
          setActiveProject({
            modalText:
              "More projects coming soon! Visit my GitHub or contact me for full portfolio."
          })
        }
        className="
          px-8 py-3
          rounded-full
          border font-bold
          transition-all duration-300
          hover:bg-emerald-500
          hover:text-white
          hover:scale-105
          active:scale-95
        "
      >
        See More
      </button>
    </div>
    

    {activeProject && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
    <div className="relative bg-white rounded-xl max-w-md w-full p-6 text-center">
      
      <h2 className="text-xl font-bold mb-4">
        Purpose of the Project
      </h2>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {activeProject.modalText}
      </p>

      <button
        onClick={() => setActiveProject(null)}
        className="mt-6 px-6 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
      >
        Close
      </button>

    </div>
  </div>
)}

  </div>
);
}
export default Work