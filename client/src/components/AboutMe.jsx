import React from 'react';
// make sure HeroImage.jsx exists

export default function AboutMe({ image }) {
  return (
    <section className="bg-surface text-text px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: About Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg text-muted mb-4">
            Hey, I'm Rudraksh Soni — a developer passionate about building meaningful projects that combine clean code, creative interfaces, and modern web technologies.
          </p>
          <p className="text-base md:text-lg text-muted">
            I love working on side projects, writing blog posts, and exploring the intersection of design, development, and productivity. Welcome to my digital space.
          </p>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 max-w-sm w-full">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border p-2 bg-background">
            <HeroImage imageUrl={image} />
          </div>
        </div>

      </div>
    </section>
  );
}
