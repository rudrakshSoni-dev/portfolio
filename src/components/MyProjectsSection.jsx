import React, { useState } from 'react';
import projects from '../assets/projectsData';
import TechSection from './TechSection';

export default function MyProjectsSection() {
  const [current, setCurrent] = useState(0);
  const { title, description, tech, imageUrl, link } = projects[current];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8 ">
        <span className="bg-primary text-white font-mono text-sm flex items-center justify-center rounded h-10 w-10">
          {'</>'}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">My Projects</h2>
      </div>

      {/* Project Card */}
      <div className="relative bg-surface border-muted text-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 ">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover"
        />
        
        {/* Content */}
        <div className="p-8 ">
          <h3 className="text-2xl font-semibold mb-2 ">{title}</h3>
          <p className="text-sm mb-4 text-muted">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((stack, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-gray-800 text-muted rounded-full"
              >
                {stack}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Check Github Repo →
          </a>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11l4.707-4.707a1 1 0 011.414 1.414L9.414 11l3.293 3.293a1 1 0 010 1.414z" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.293 4.293a1 1 0 011.414 0L13.414 9l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 9 7.293 5.707a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>

      {/* Index */}
      <div className="text-center text-sm text-gray-400 mt-4">
        {current + 1} / {projects.length}
      </div>

<div className="flex justify-center">
      <button className="mt-4  w-[200px] bg-surface hover:bg-white hover:text-black text-gray-300 font-semibold py-2 px-4 rounded-lg transition duration-200">
        View More →
      </button>
</div>
    
    <div className="">
        <TechSection />
    </div>

    </section>
  );
}
