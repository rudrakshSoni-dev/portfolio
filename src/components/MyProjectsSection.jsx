import React, { useState } from 'react';
import projects from '../assets/projectsData';
import TechSection from './TechSection';

export default function MyProjectsSection() {
  const [current, setCurrent] = useState(0);
  const { title, description, tech, imageUrl, link } = projects[current];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans">
      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-12">
        <span className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-xl font-mono rounded-full h-12 w-12 flex items-center justify-center shadow-md">
          {'</>'}
        </span>
        <h2 className="text-4xl font-bold text-white tracking-wide">My Projects</h2>
      </div>

      {/* Project Card */}
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group hover:shadow-2xl">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[350px] object-cover rounded-t-2xl transition duration-500 group-hover:scale-105"
        />

        {/* Content */}
        <div className="p-6 text-white space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((stack, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-indigo-700/20 border border-indigo-500/30 text-indigo-300 rounded-full font-medium"
              >
                {stack}
              </span>
            ))}
          </div>

          {/* GitHub Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm mt-4 text-blue-400 hover:underline transition duration-150"
          >
            🔗 View GitHub Repo
          </a>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          →
        </button>
      </div>

      {/* Index Counter */}
      <div className="text-center text-sm text-gray-400 mt-4">
        Project {current + 1} of {projects.length}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-br from-purple-700 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md">
          View More →
        </button>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20">
        <TechSection />
      </div>
    </section>
  );
}
