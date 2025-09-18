import React from 'react'

function Card({img,title,desc}) {
  return (
    <article className='items-center rounded-xl p-2 shadow-lg bg-gradient-to-t bg-blue-600 via-gray-800 from-pink-500 hover:bg-gradient-to-b bg-blue-600 gray-500 from-pink-500 transition duration-300 hover:shadow-blue-400' >
        <div className='relative overflow-hidden rounded-xl'>
            <img className='w-full h-50 md:h-70 object-cover rounded-xl' src={img} alt={title} />
        </div>
        <div className='mt-2'>
            <h3 className='font-bold text-pink-100 '>{title}</h3>
        </div>
        <div className='mb-4 mt-2 bg-gradient-to-b bg-green-300 from-yellow-400 bg-clip-text text-transparent'>
            <p>{desc}</p>
        </div>
    </article>

  )
}

export default Card;
