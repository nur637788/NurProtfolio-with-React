import React from 'react'
import Footer from '../Components/Footer';
import Pcard from '../Components/Pcard';

function Projects() {
const items= [
    {
      img:'/public/my contact img.png',
      title:'My Contact Website',
      desc:'Clean bulding website, semantic, and SEO-friendly website using React and Tailwind & Responsive.',   
      code:'https://github.com/nur637788/Contact-Website',
      live:'https://nur-637788.netlify.app/'
    },
    {
      img:'/public/uiux img.png',
      title:'Morden UI/UX Tools',
      desc:'Strong design Morden UI/UX tools website Using HTML, CSS, JS . ',   
      code:'https://github.com/nur637788/ui-ux-website',
      live:'https://uiuxweb.netlify.app/'
    },
    {
      img:'/public/nur express img.png',
      title:'Buy & sell Website',
      desc:'Create a websites dynamic and Functional, Nur_Express Website Using React and Tailwind & Responsive.',   
      code:'https://github.com/nur637788/React-App',
      live:'https://nur-expressbd.netlify.app/'
    },
    {
      img:'/public/noyon express img.png',
      title:'E-Commarce Project',
      desc:'A static web page for E-Commarce Website Using Language from HTML, CSS, JS ',   
      code:'https://github.com/nur637788/E-commerce-Website',
      live:'https://ecommerceproje.netlify.app/'
    },
    {
      img:'/public/clock img.png',
      title:'Digital Clock',
      desc:'Dynamic & Functional Web Page, building single-page applications with JavaScript. ', 
      code:'https://github.com/nur637788/Digital-clock-Namaj-Schedule',
      live:'https://digitalclocknamajschedule.netlify.app/'  
    },
    {
      img:'/public/product img.png',
      title:'E-commarce Website',
      desc:'Static single page web appliction for E-Commarce Website Using HTM, CSS & Responsive.',   
      code:'https://github.com/nur637788/Responsive-E-Commerce-website',
      live:'https://responsiveecommercsite.netlify.app/'
    },
     {
      img:'/public/protfolio img.png',
      title:'My Protfolio',
      desc:'Able to deploy modern web apps easily on Netlify. Skilled in handling domains, continuous deployment, and hosting.',   
      code:'https://github.com/nur637788/Nur-Protfilio',
      live:'https://nur637788protfolio.netlify.app/'
    },
     {
      img:'/public/toll img.png',
      title:'Toll Managment',
      desc:'A UI concept for managing vehicle entries and payments efficiently, Using HTML,CSS, JS .',  
      code: 'https://github.com/nur637788/Toll-Plazza-Management-System' ,
      live: 'https://tollplazzamanagement.netlify.app/'
    },
    {
      img:'/public/Website protfolio img.png',
      title:'Protfolio Website',
      desc:'A user-friendly parsonal protfolio website vesiual & responsive design, using HTML,CSS & Responsive.',  
      code: 'https://github.com/nur637788/NurDev.-Protfolio' ,
      live: 'https://nur-protfolio63.netlify.app/'
    },
     
     
  ];
  return (
    <div>
    <section className=' max-auto px-4 py-5'>
      <div className='mt-10 mb-5 text-center text-3xl font-bold bg-gradient-to-b bg-amber-400 from-blue-400 bg-clip-text text-transparent'>
        <header>My Projects</header>
       <div className='w-full h-2 bg-gradient-to-l bg-black via-blue-300 via-fuchsia-500 via-amber-300 from-red-600 '></div>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 '>
          {items.map((p,index)=>(
            <Pcard key={index} img={p.img} title={p.title} desc={p.desc} code={p.code} live={p.live} />
          ))}
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default Projects;
