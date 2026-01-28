import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import profileImg from "../assets/Gemini_Generated_Image_lebfowlebfowlebf.png";
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";



const  Home=()=>{


    return(
        <div>
             <div className="
        bg-white 
        m-7
        rounded 
      
        shadow-[0_2px_6px_rgba(0,0,0,0.5)]
        flex items-center
      ">
        <div className="px-25 py-20 mt-33 max-w-2xl">


        <motion.h1 className="bold text-4xl"  initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1 }}> Software Developer</motion.h1>
          
          <h1 className="text-emerald-600 text-5xl mb-2">
            Hello, I'm
          </h1>

          <h1 className="text-6xl font-bold mb-6">
            Gopal Bhople
          </h1>

          <p className="text-gray-700 text-lg  leading-relaxed">
           I transform complex ideas into clean, high-impact web experiences, crafting modern, scalable, and high-performance applications that deliver real value.
          </p>  

            <Link to="/work">
          <button className ="rounded-full p-2 text-white   
          bg-[linear-gradient(45deg,#10b981,#9333ea)] hover:text-black 
          hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)] cursor-pointer ">View My Work</button></Link>
          <a href ="/resume-gopal.pdf" className=" rounded-full p-2 text-black border px-6 ml-10 mt-2 
           border-gray-400 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)]">My Resume</a>
         <div className="gap-2 py-4 px-2 flex">
         <a href ="https://twitter.com/@GopalBhople2005" className =" rounded-full p-3 border 
         flex border-gray-500 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)] ">
              <RiTwitterXLine size={23}/></a>


         <a   href="https://github.com/Gopalbhople1208"
 className =" rounded-full p-3 border flex border-gray-500 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)] ">
                 <Github />

         </a>
         <a href="https://www.linkedin.com/in/Gopal-Bhople "
         className =" rounded-full p-3 border flex border-gray-500 hover:shadow-[0_2px_6px_rgba(0,0,0,0.5)] ">
                     <Linkedin />


         </a>
         </div>
          </div >
          <div className="">
          <img src={profileImg} alt="Profile" />
          </div>
            </div>
     

        </div>
    )
}
export default Home
