import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-blue-600 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Home Page</h1>
        <p className="text-lg mb-6">
          This is a simple homepage styled with <span className="font-semibold">Tailwind CSS</span>.
        </p>
        <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-300 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
