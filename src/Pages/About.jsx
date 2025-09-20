import React from 'react';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 mt-12">
      <div className="max-w-4xl mx-auto text-center px-2 mb-3">
        <h2 className="text-4xl font-bold bg-gradient-to-l bg-green-400 from-red-600 bg-clip-text text-transparent mb-6">
          About Me
          <div className='w-full h-2 bg-gradient-to-l bg-white via-fuchsia-500 from-red-600 '></div>
        </h2>
        

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Hi, I’m <span className="text-pink-500 font-semibold">Abdun Nur</span>, 
          a passionate <span className="text-pink-500">Frontend Developer</span>.  
          I love building beautiful, minimal and user-friendly websites with 
          <span className="font-medium text-gray-800 dark:text-white"> React & TailwindCSS</span>.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-amber-50 '>
          <div className='mb-8 p-1 rounded-lg border-5 border-blue-700 dark:bg-gray-900 hover:shadow-2xl hover:shadow-cyan-600 transition duration-300 h-96' >
            <p><span className='font-bold text-pink-500 underline'>Who I Am</span> <br />
              I'm a passionate developer and designer from Bangladesh with over 01 years of experience creating digital solutions. My journey began when I first discovered my love for coding in institute, and since then I've been dedicated to crafting exceptional user experiences.</p>
            <h2 className='font-bold underline text-pink-500'>Study Info:</h2>
            <p>Hi I'm <strong>Abdun Nur (NOYON)</strong> <br />
              <b>Student at:</b> Chapainawabganj Polytechnic Institute(CNPI) <br />
              <b>Dep. Of:</b> Computer Science & Technology(CST) <br />
              <b>Complete☑️</b> Lavel-1 Computer Office Appliction  <br /><b>at:</b> Chapainawabganj
                Technical Training Center(TTC)
            </p>
            <button className='mt-5 border-2 p-1 rounded-md border-blue-600 bg-blue-400 hover:bg-blue-600'><a href="https://drive.google.com/file/d/1i5Bp8ZFpVw2Vlz4_bls-Pb6IrV2PsTRo/view?usp=sharing" target='_blank'>Veiw Resume</a></button>
           
          </div>

          <div className='hover:shadow-2xl hover:shadow-cyan-700 h-86 mb-15 '>
             <img className='rounded-lg border-5 border-blue-700 w-full h-96 object-cover' src="/cover img1.jpg"  alt="cover img1" />
          </div>
        </div>
      </div>
        <Footer/>
    </section>
  );
};

export default About;
