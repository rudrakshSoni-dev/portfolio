import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React and Tailwind CSS to showcase my skills and projects.',
    imageUrl: 'https://source.unsplash.com/800x400/?portfolio,design',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://yourportfolio.com',
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using OpenWeatherMap API with real-time updates and responsive UI.',
    imageUrl: 'https://source.unsplash.com/800x400/?weather,clouds',
    tech: ['React', 'API', 'CSS'],
    link: 'https://weatherapp.com',
  },
  {
    title: 'Task Manager',
    description: 'A task management app with drag-and-drop features, Firebase authentication, and real-time syncing.',
    imageUrl: 'https://source.unsplash.com/800x400/?task,productivity',
    tech: ['React', 'Firebase', 'DnD'],
    link: 'https://taskmanager.com',
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">Projects</h1>

<div className="flex flex-col gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition duration-300"
    >
      {/* Image (Full Width) */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 text-blue-300">{project.title}</h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 hover:underline transition"
        >
          Visit GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 3l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
