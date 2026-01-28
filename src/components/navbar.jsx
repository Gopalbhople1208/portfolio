import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profileImg from "../assets/Gemini_Generated_Image_olz0twolz0twolz0-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-gray-50 select-none contextmenu keydown dragstart mt-2 mx-4 lg:mx-6 rounded-xl shadow-[0_6px_15px_rgba(0,0,0,0.25)] px-4 py-3"
    >
   
      <div className="flex justify-between items-center">
        
      
        <img src={profileImg} alt="logo" className="h-12 cursor-pointer" />

    
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li><Link to="/" className="hover:text-emerald-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-emerald-600">About</Link></li>
          <li><Link to="/services" className="hover:text-emerald-600">Skills</Link></li>
          <li><Link to="/work" className="hover:text-emerald-600">Work</Link></li>
          <li><Link to="/form" className="hover:text-emerald-600">Contact</Link></li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {open && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-center font-semibold">
            <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/services">Skills</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/work">Work</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/form">Contact</Link></li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
