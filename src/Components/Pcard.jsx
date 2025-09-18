import React from 'react'

function Pcard({img,title,desc,code,live}) {
  return (
    <article className='items-center rounded-xl p-2 shadow-lg bg-gradient-to-t bg-gray-600 via-green-800 from-pink-500 hover:bg-gradient-to-b bg-blue-600 gray-500 from-pink-500 transition duration-400 hover:shadow-cyan-800' >
        <div className='relative overflow-hidden rounded-xl'>
            <img className='w-full   object-cover rounded-xl' src={img} alt={title} />
        </div>
        <div className='mt-2'>
            <h3 className='font-bold text-pink-100 '>{title}</h3>
        </div>
        <div className='mb-4 mt-2 bg-gradient-to-t bg-green-300 from-yellow-400 bg-clip-text text-transparent'>
            <p>{desc}</p>
        </div>
        <div className='flex justify-between'>
          <a className='border-2 px-2 rounded hover:bg-white hover:font-bold' href={code} target='_blank'>Code</a>
           <a className='border-2 px-2 rounded hover:bg-white hover:font-bold' href={live} target='_blank'>Live</a>
        </div>
    </article>

  )
}

export default Pcard;
