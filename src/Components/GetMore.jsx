import React, { useState, useEffect } from "react";
import Gallary from './Gallary'
import Footer from "./Footer";

const slides = [
  {
    id: 1,
    title: "Protfolio Website",
    desc: "A user-friendly parsonal protfolio website vesiual & responsive design, using HTML,CSS & Responsive.",
    img: "/public/slid image/website protfolio img.png",
  },
  {
    id: 2,
    title: "Toll Managment",
    desc: "A UI concept for managing vehicle entries and payments efficiently, Using HTML,CSS, JS .",
    img: "/public/slid image/toll img.png",
  },
  {
    id: 3,
    title: "My Protfolio",
    desc: "Able to deploy modern web apps easily on Netlify. Skilled in handling domains, continuous deployment, and hosting.",
    img: "/public/slid image/protfolio img.png",
  },
  {
    id: 4,
    title: "E-commarce Website",
    desc: "Static single page web appliction for E-Commarce Website Using HTM, CSS & Responsive.",
    img: "/public/slid image/product img.png",
  },
  {
    id: 5,
    title: "Digital Clock",
    desc: "Dynamic & Functional Web Page, building single-page applications with JavaScript.",
    img: "/public/slid image/clock img.png",
  },
  {
    id: 6,
    title: "E-Commarce Project",
    desc: "A static web page for E-Commarce Website Using Language from HTML, CSS, JS",
    img: "/public/slid image/noyon express img.png",
  },
  {
    id: 7,
    title: "Buy & sell Website",
    desc: "Create a websites dynamic and Functional, Nur_Express Website Using React and Tailwind & Responsive.",
    img: "/public/slid image/nur express img.png",
  },
  {
    id: 8,
    title: "Morden UI/UX Tools",
    desc: "Strong design Morden UI/UX tools website Using HTML, CSS, JS .",
    img: "/public/slid image/uiux img.png",
  },
  {
    id: 9,
    title: "My Contact Website",
    desc: "Clean bulding website, semantic, and SEO-friendly website using React and Tailwind & Responsive.",
    img: "/public/slid image/my contact img.png",
  },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="pt-8 mt-12 bg-gradient-to-t bg-blue-400 via-indigo-800 from-blue-100">
      <h2 className="font-bold text-2xl text-center mb-5">Slides</h2>
    <div className=" relative w-full h-80 md:h-[450px]  overflow-hidden rounded border-2">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>

        <Gallary />
        <Footer />
    </section>
  );
};

export default BannerCarousel;
