import { useState } from "react";
import emailjs from "@emailjs/browser";
import { RiTwitterXLine } from "react-icons/ri";
import { Send, PhoneCall, Instagram, Linkedin } from "lucide-react";
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [finalMsg, setFinalMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      let isValid = true; 

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name.trim() === "") {
    setNameError("Name is required");
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    setEmailError("Email is incorrect");
    isValid = false;
  }

  if (!isValid) return;

    emailjs
      .send(
        "service_z38ae5f",
        "template_9xlzwkf",
        {
          From_name: name,
          From_email: email,
          message: idea,
        },
        "GmyDUCNXv6p8Rt9KX"
      )
      .then(() => {
        setFinalMsg("Message sent successfully!");
        setName("");
        setEmail("");
        setIdea("");
      })
      .catch(() => {
        setFinalMsg("Failed to send message");
      });
  };

  return (
    <div className="bg-white select-none contextmenu keydown dragstart m-4 lg:m-7 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.5)] px-6 lg:px-12 py-12 lg:py-16">

      <div className="flex flex-col lg:flex-row gap-12">

       
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-3xl lg:text-5xl mb-6">
            Contact Me
          </h1>

          <div className="flex items-center gap-4 py-2">
             <Mail />
            <span>gbhople63@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 py-2">
            <PhoneCall />
            <span>9146206019</span>
          </div>

          <div className="flex gap-4 mt-6">
             <a href ="https://github.com/Gopalbhople1208" 
             className="rounded-full p-3 border hover:shadow-lg">
               <Github size ={23}/>
            </a>
            <a href ="https://twitter.com/@GopalBhople2005" className="rounded-full p-3 border hover:shadow-lg">
              <RiTwitterXLine size ={23}/>
            </a>
            <a href="https://www.instagram.com/gopal.bhople.568/" className="rounded-full p-3 border hover:shadow-lg">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/Gopal-Bhople " className="rounded-full p-3 border hover:shadow-lg">
              <Linkedin />
            </a>
          </div>
        </div>

     
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-2xl lg:text-4xl mb-6">
            Let's Work Together
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="border rounded-xl px-4 py-2"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="border rounded-xl px-4 py-2"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="border rounded-xl px-4 py-2"
              rows="4"
              placeholder="Explain your idea"
              onChange={(e) => setIdea(e.target.value)}
            />

         <button className="
  mt-4 
  py-3 
  px-6 
  sm:px-8 
  rounded-full 
  bg-[linear-gradient(45deg,#10b981,#9333ea)] 
  text-white 
  font-semibold
  text-base sm:text-lg
  hover:shadow-lg
  transition-all
  duration-300
  w-full sm:w-auto
  flex items-center justify-center gap-2
">
  <Send size={20} />
  Submit
</button>


            {finalMsg && (
              <p className="text-green-600 font-semibold">{finalMsg}</p>
            )}
          </form>
        </div>
      </div>

      
      <div className="mt-16 text-center">
        <h1 className="font-bold text-3xl">Gopal Bhople</h1>
        <p className="font-semibold mt-2">
          "Success is when preparation meets opportunity."
        </p>
        <p className="font-semibold mt-1">
          © 2026. Open to opportunities and collaborations.
        </p>
      </div>
    </div>
  );
};

export default Form;

