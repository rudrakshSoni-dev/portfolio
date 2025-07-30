import React from 'react';
import ece from "../assets/ece.png";

export default function MyStudio() {
  return (
    <section className="flex-1 my-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white px-8 py-10 w-full shadow-lg transition-all duration-300">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-sm flex items-center justify-center rounded h-10 w-10 shadow">
          {'</>'}
        </span>
        <h2 className="text-xl font-bold tracking-wide">MY STUDIO</h2>
      </div>

      {/* Introduction */}
      <p className="text-sm text-gray-300 leading-relaxed mb-6">
        Hey, I'm a passionate software developer who loves building useful tools. I'm also pursuing Electronics Engineering, which gives me a well-rounded perspective in both software and hardware development.
      </p>

      {/* Resume Button */}
      <button className="border border-white/20 hover:border-primary bg-gradient-to-r from-surface to-black/60 hover:from-primary hover:to-indigo-500 text-white rounded-lg text-sm px-5 py-2 font-medium transition duration-300 hover:scale-105">
        DOWNLOAD RESUME
      </button>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        
        {/* Card 1 */}
        <div className="p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20 w-full lg:w-1/2 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="text-primary mb-4">
            <svg
              stroke="currentColor"
              fill="#FF5722"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">SOFTWARE DEVELOPER</h3>
          <p className="text-sm text-gray-300">
            I create software for fun. Have a cool idea? Let’s collaborate! Check out my GitHub for open-source tools and contributions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20 w-full lg:w-1/2 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="text-primary mb-4">
            <img src={ece} alt="ECE Icon" className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-semibold mb-2">ELECTRONICS ENGINEER</h3>
          <p className="text-sm text-gray-300">
            I explore embedded systems, sensors, and hardware logic. My dual skillset helps me design smarter, integrated tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
