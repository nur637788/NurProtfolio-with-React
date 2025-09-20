import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="text-black bg-gray-200 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src='/logo image.png'
              alt="logo image"
              className="w-15 h-15 rounded-full bg-blue-400 border-2 border-black"
            />
            <h2 className="font-bold text-lg bg-gradient-to-l bg-pink-500 from-blue-700 bg-clip-text text-transparent">ABDUN NUR~ <br /><span className="bg-gradient-to-r bg-pink-500 from-blue-700 bg-clip-text text-transparent" >Fronend Developer</span></h2>
          </div>

          <h3 className="mt-4 font-bold">Follow Now</h3>
          <div className="flex space-x-3 mt-2">
            <a href="https://www.facebook.com/nur637788" target="_blank" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/nur637788/" target="_blank" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/nur637788/" target="_blank" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaInstagram />
            </a>
            <a href="https://www.github.com/nur637788/" target="_blank"  className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-sm text-black ">
            <li className="hover:underline hover:font-bold text-black"><a href="#home">Home</a> </li>
            <li className="hover:underline hover:font-bold text-black"><a href="#about">About</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="#skills">Skills</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="#projects">Projects</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/*Categories */}
        <div>
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="space-y-2 text-sm text-black">
            <li>HTML,CSS</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>React.js</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">Contact Info</h3>
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaWhatsapp />
            </div>
            <span className="text-sm text-black hover:underline hover:font-bold"><a href="https://wa.me/<8801749535688>" target="_blank">+88 01749535688</a></span>
          </div>

          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FiMail />
            </div>
            <span className="text-sm text-black hover:underline hover:font-bold"><a href="mailto:mdnoyon631234@gmail.com" target="_blank">Send Mail</a></span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FiMapPin />
            </div>
            <span className="text-sm text-black hover:underline hover:font-bold ">
              <a href="https://www.google.com/maps/place/Chapainawabganj+Polytechnic+Institute/@24.6041348,88.2535192,132m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39fbb6adce9b8e7f:0x9e48aed7c8c2e606!2sChapainawabganj+Polytechnic+Institute!8m2!3d24.6042394!4d88.253888!16s%2Fg%2F11clsy857f!3m5!1s0x39fbb6adce9b8e7f:0x9e48aed7c8c2e606!8m2!3d24.6042394!4d88.253888!16s%2Fg%2F11clsy857f?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Chapainawabganj, Rajshahi</a>
            </span>
          </div>
        </div>
      </div>
    <div className=' mt-2 w-full h-1 bg-gradient-to-l bg-pink-800  via-amber-300 from-red-600 '></div>
      <div className="mt-2 text-center text-black">
        <h3>© 2025 Protfolio. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
