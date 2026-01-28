import { CodeXml, Database, Figma } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Services = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
   <div className="bg-white select-none contextmenu keydown dragstart m-4 lg:m-7 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.5)] px-6 lg:px-12 py-12 lg:py-16">

      
      <h1 className="font-bold text-3xl lg:text-5xl mb-10">Skills</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Web Dev */}
        <div className="rounded-xl p-6 shadow hover:scale-105 transition">
          <CodeXml size={48} />
          <h2 className="font-bold text-xl mt-3">Web Development</h2>
          <p>HTML, CSS, JavaScript, React</p>

          <button
            onClick={() => setOpenCard(1)}
            className="mt-4 underline font-semibold"
          >
            Learn More
          </button>
        </div>

        {/* Backend */}
        <div className="rounded-xl p-6 shadow hover:scale-105 transition">
          <Database size={48} />
          <h2 className="font-bold text-xl mt-3">Database</h2>
          <p>Java, JDBC, MySQL</p>

          <button
            onClick={() => setOpenCard(2)}
            className="mt-4 underline font-semibold"
          >
            Learn More
          </button>
        </div>

        {/* Figma */}
        <div className="rounded-xl p-6 shadow hover:scale-105 transition">
          <Figma size={48} />
          <h2 className="font-bold text-xl mt-3">Figma</h2>
          <p>UI / UX Design</p>

          <button
            onClick={() => setOpenCard(3)}
            className="mt-4 underline font-semibold"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* ✅ MODAL */}
      {openCard && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            
            {openCard === 1 && (
              <p>
                I specialize in web development by building responsive, scalable, and visually appealing web applications using HTML, CSS, JavaScript, React, and Tailwind CSS. My expertise includes creating clean and structured layouts with HTML and CSS, adding interactivity with JavaScript, developing reusable and modular components with React, and designing modern, responsive interfaces using Tailwind CSS. I focus on clean code, performance optimization, and delivering smooth, user-friendly experiences across desktop and mobile devices.
              </p>
            )}

            {openCard === 2 && (
              <p>
               I specialize in web development by building responsive, scalable, and visually appealing web applications using HTML, CSS, JavaScript, React, and Tailwind CSS. My expertise includes creating clean and structured layouts with HTML and CSS, adding interactivity with JavaScript, developing reusable and modular components with React, and designing modern, responsive interfaces using Tailwind CSS. I focus on clean code, performance optimization, and delivering smooth, user-friendly experiences across desktop and mobile devices..
              </p>
            )}

            {openCard === 3 && (
              <p>
           Figma is a design tool used to create user interfaces (UI) and layouts for websites or apps. In your Hospital Management System project:

You can design screens visually before coding.

Helps plan how pages will look and feel.

Designers and developers can collaborate in real-time.

Ensures your UI is consistent, user-friendly, and responsive for desktop and mobile.

In short: Figma is for planning and designing the UI before implementing it in React or other technologies.
              </p>
            )}

            <button
              onClick={() => setOpenCard(null)}
              className="mt-6 px-6 py-2 rounded-full bg-emerald-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
