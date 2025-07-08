import React from 'react';

const technologies = [
  { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'Tailwind CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Express.js', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
  { name: 'MongoDB', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'Redux', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' },
  { name: 'Git', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
  { name: 'GitHub', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
  { name: 'Firebase', image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
];

export default function TechnologiesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-6 text-center"><span className='underline decoration-primary underline-offset-4 '>Technologies</span> I Use</h2>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center border border-2 border-gre bg-accent text-white px-2 py-2 rounded-lg shadow-md transition hover:scale-[1.03] duration-200"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-6 h-6 mr-2 object-contain"
            />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
