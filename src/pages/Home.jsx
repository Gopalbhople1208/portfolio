import { Github, Linkedin } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import profileImg from "../assets/Gemini_Generated_Image_lebfowlebfowlebf.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div  className="
  bg-white
  m-4 lg:m-7
  rounded-xl
  shadow-[0_2px_6px_rgba(0,0,0,0.5)]
  min-h-[calc(100vh-3.5rem)]
  flex
  items-center
">

      
      <div className="flex select-none contextmenu keydown dragstart  flex-col-reverse lg:flex-row items-center gap-10 px-6 lg:px-25 py-12 lg:py-20">

        <div className="max-w-2xl text-center lg:text-left">
          <motion.h1
            className= "text-neutral-500 text-2xl lg:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Software Developer
          </motion.h1>

          <h2 className="text-emerald-600 text-3xl lg:text-5xl mt-2">
            Hello, I'm
          </h2>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Gopal Bhople
          </h1>

          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
            I transform complex ideas into clean, high-impact web experiences,
            crafting modern, scalable, and high-performance applications.
          </p>

       
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/work">
              <button className="rounded-full px-6 py-3 text-white bg-[linear-gradient(45deg,#10b981,#9333ea)] hover:shadow-lg transition">
                View My Work
              </button>
            </Link>

            <a
              href="/resume-gopal.pdf"
              className="rounded-full px-6 py-3 border border-gray-400 hover:shadow-lg transition"
            >
              My Resume
            </a>
          </div>

        
          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="https://twitter.com/@GopalBhople2005"
              className="p-3 border rounded-full hover:shadow-lg transition"
            >
              <RiTwitterXLine size={22} />
            </a>

            <a
              href="https://github.com/Gopalbhople1208"
              className="p-3 border rounded-full hover:shadow-lg transition"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/Gopal-Bhople"
              className="p-3 border rounded-full hover:shadow-lg transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>

       
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="
    w-64
    sm:w-80
    md:w-[26rem]
    lg:w-[32rem]
    xl:w-[36rem]
    2xl:w-[40rem]
    max-w-full
    object-contain
  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
