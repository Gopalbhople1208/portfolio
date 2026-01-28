import { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

import profileImg from "../assets/Screenshot 2026-01-27 152629.png";
import profileImg2 from "../assets/Deloitte.png";
import profileImg3 from "../assets/tata-forage-intenship.png";
import profileImg1 from "../assets/Gemini_Generated_Image_qiidqnqiidqnqiid.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="bg-white select-none contextmenu keydown dragstart m-4 lg:m-7 rounded-xl min-h-screen shadow-[0_2px_6px_rgba(0,0,0,0.5)] py-10 lg:py-16 px-5 lg:px-12">
      
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

   
        <div className="w-full lg:w-1/3 flex justify-center">
          <motion.img
            src={profileImg1}
            alt="Profile"
className="
  w-56 h-56
  sm:w-64 sm:h-64
  md:w-80 md:h-80
  lg:w-96 lg:h-96
  xl:w-[28rem] xl:h-[28rem]
  object-cover
  rounded-xl
  shadow-md
  mt-6
"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-700 mb-8 text-sm lg:text-base">
            I am a Computer Science Engineering fresher passionate about learning new technologies and building practical software solutions. I enjoy working with web technologies and databases, and I have hands-on experience with Java, JavaScript, React, MySQL, and JDBC through academic projects.
          </p>

    
          <ul className="flex flex-wrap gap-4 text-sm lg:text-xl font-bold">
            {["skills", "Education", "Certifications"].map(tab => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full border cursor-pointer transition
                  ${activeTab === tab ? "bg-black text-white" : "border-gray-500 hover:shadow-md"}`}
              >
                {tab}
              </li>
            ))}
          </ul>

       
          <div className="mt-8 text-gray-700 text-sm lg:text-base">

            {activeTab === "skills" && (
              <ul className="list-disc ml-6 space-y-2">
<h1 className =" font-bold ">Programming Languages</h1>
      <li> Java </li>
      <li>JavaScript </li>
      <li>Python</li>
        <h1 className =" font-bold ">Web Technologies</h1>
      <li>React.js</li>
      <li>HTML & CSS</li>
      <li>Tailwind CSS</li>
        <h1 className =" font-bold ">Database</h1>
     <li> MySQL </li>
       <h1 className =" font-bold ">Tools & Platforms</h1>
      <li > Git & Github</li>
       <li >VS Code</li>
       </ul>

            )}

            {activeTab === "Education" && (
              <div className="space-y-5">

<div className="flex flex-col gap-6">
  
  {/* Degree */}
  <div className="flex flex-col gap-1">
    <h2 className="text-lg md:text-xl font-bold">
      B.E. Computer Science Engineering
    </h2>
    <p className="text-sm md:text-base">
      Shri Sant Gajanan Maharaj College of Engineering, Shegaon
    </p>
    <p className="text-sm text-gray-600">
      Year of Passing: 2027
    </p>
  </div>

  {/* HSC */}
  <div className="flex flex-col gap-1">
    <h2 className="text-lg md:text-xl font-bold">
      Higher Secondary Certificate (HSC)
    </h2>
    <p className="text-sm md:text-base">
      Mahatma Fule Jr. Arts & Science College, Kherda, Jalgaon (Jamod)
    </p>
    <p className="text-sm text-gray-600">
      Year: 2021 – 2023
    </p>
  </div>

  {/* SSC */}
  <div className="flex flex-col gap-1">
    <h2 className="text-lg md:text-xl font-bold">
      Secondary School Certificate (SSC)
    </h2>
    <p className="text-sm md:text-base">
      The New Era High School, Jalgaon (Jamod)
    </p>
    <p className="text-sm text-gray-600">
      Year: 2021
    </p>
  </div>

</div>

</div>



            )}

            {activeTab === "Certifications" && (
              <div className="space-y-6">
                {[
                  { title: "Database Management", img: profileImg },
                  { title: "Deloitte Internship", img: profileImg2 },
                  { title: "TATA Forage Internship", img: profileImg3 },
                ].map((item, i) => (
                  <div key={i}>
                    <h1 className="font-bold">{item.title}</h1>
                    <button
                      onClick={() => setActiveImage(item.img)}
                      className="mt-2 px-4 py-1 border rounded-full hover:shadow-md"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 relative max-w-lg w-full">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 bg-rose-600 rounded right-2"
            >
              <X />
            </button>
            <img src={activeImage} alt="Certificate" className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
