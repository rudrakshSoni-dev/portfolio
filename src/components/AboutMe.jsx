import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function AboutMeSection() {
  return (
    <section className="pt-10 m-4 text-text max-w-4xl">
      
      {/* Typing Heading */}
      <h2 className="underline decoration-primary underline-offset-4 font-bold text-left text-[30px] mb-4">
        <Typewriter
          words={['About me']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </h2>

      {/* Paragraphs */}
      <p className="text-[18px] text-left text-muted mb-3 leading-relaxed">
        I specialize in building modern, responsive web applications using technologies like React, Tailwind CSS, and Node.js. With a focus on clean code and intuitive UI, I aim to craft experiences that are both functional and beautiful.
      </p>
      <p className="text-[18px] text-left text-muted mb-3 leading-relaxed">
        I enjoy solving real-world problems through technology, whether it's creating tools to increase productivity or experimenting with personal projects. Outside of code, I dabble in visual storytelling and music.
      </p>

      {/* GitHub Button */}
      <a
        href="https://github.com/rudrakshSoni-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mt-4 bg-blue-500 hover:bg-blue-700 text-white text-[20px] font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-[320px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 ... Z" />
        </svg>
        <p className="px-2">Check My GitHub</p>
      </a>

      {/* Contact Button */}
      <a
        href="#contact"
        className="flex items-center mt-4 bg-gray-800 hover:bg-gray-700 text-white text-[20px] font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-[320px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 ..." />
        </svg>
        <p className="px-2">Contact Me</p>
      </a>
    </section>
  );
}
