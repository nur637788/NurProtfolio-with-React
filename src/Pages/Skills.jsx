import React from 'react'
import Card from '../Components/Card';
import Footer from '../Components/Footer';

function Skills() {
const items= [
    {
      img:'https://webdevmonk.com/main/html.png',
      title:'🖥️ HTML',
      desc:'I can build clean, semantic, and SEO-friendly web pages Skilled in creating structured layouts with proper tags and attributes.',   
    },
    {
      img:'https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png',
      title:'🎨 CSS',
      desc:'Strong ability to design beautiful and responsive layouts. Experienced in Flexbox, Grid, and modern styling techniques.',   
    },
    {
      img:'https://thumbs.dreamstime.com/b/logotipo-do-javascript-136765881.jpg',
      title:'⚡ JavaScript',
      desc:'Can make websites dynamic and interactive with core JS concepts. Skilled in DOM manipulation, events, and ES6+ features.',   
    },
    {
      img:'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png',
      title:'🎯 Tailwind CSS',
      desc:'Expert in creating modern UI with Tailwind utility classes. Can build fully responsive and minimal designs quickly.',   
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fX20XZ9WcCiM-_EINcthKnrldIsA2nNKAi77uAVmuxheapimECkmuEs2xebuUDx24s0&usqp=CAU',
      title:'⚛️ React',
      desc:'Skilled in building single & multipul page applications with React. Experienced in components, props, hooks, and React Router.',   
    },
    {
      img:'https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png',
      title:'🌍 Git & GitHub',
      desc:'Comfortable with version control using Git commands.Can manage repositories, branches, and collaboration on GitHub.',   
    },
     {
      img:'https://images.seeklogo.com/logo-png/47/1/netlify-icon-logo-png_seeklogo-477950.png',
      title:'🚀 Netlify',
      desc:'Able to deploy modern web apps easily on Netlify. Skilled in handling domains, continuous deployment, and hosting.',   
    },
     {
      img:'https://it.wustl.edu/app/uploads/2023/06/M365-Apps-1024x837.png',
      title:'📝 Office Applications',
      desc:'Proficient in MS Word, Excel, PowerPoint for documentation. Can prepare reports, spreadsheets, and presentations efficiently.',   
    },
     
     
  ];
  return (
    <div>
    <section className=' max-auto px-4 py-5'>
      <div className='my-10 text-center text-3xl font-bold  '>
        <header className='bg-gradient-to-t bg-amber-400 from-blue-400 bg-clip-text text-transparent'>My Skills</header>
        <div className='w-full h-2 bg-gradient-to-l bg-black via-blue-300 via-green-500 via-amber-300 from-red-600 '></div></div>
      <div className='grid grid-cols-2 md:grid-cols-3  gap-5 '>
          {items.map((p,index)=>(
            <Card key={index} img={p.img} title={p.title} desc={p.desc} />
          ))}
      </div>
    </section>
      <Footer />
    </div>
  )
}

export default Skills;
