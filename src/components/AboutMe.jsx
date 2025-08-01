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
        aria-label="GitHub Profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 50 50"
          className="fill-white"
        >
          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39
          c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2
          c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975
          c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714
          c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999
          c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6
          c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6
          c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999
          c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689
          c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33
          c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25
          C2,35.164,8.63,43.804,17.791,46.836z" />
        </svg>
        <p className="px-2">Check My GitHub</p>
      </a>

      {/* Contact Button */}
      <a
        href="#contact"
        className="flex items-center mt-4 bg-gray-800 hover:bg-gray-700 text-white text-[20px] font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-[320px]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

        <p className="px-2">Contact Me</p>
      </a>
    </section>
  );
}
