import React from 'react';

export default function MyLibrary() {
  return (
    <section className="px-6 py-16 text-text bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 underline decoration-primary underline-offset-4">
          My Library
        </h2>

        {/* Blog Suggestions */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-primary">Blog Suggestions</h3>
          <ul className="list-disc list-inside space-y-1 text-muted text-sm md:text-base">
            <li><a href="#" className="hover:text-white transition">The Pragmatic Engineer</a></li>
            <li><a href="#" className="hover:text-white transition">Overreacted by Dan Abramov</a></li>
            <li><a href="#" className="hover:text-white transition">Paul Graham's Essays</a></li>
          </ul>
        </div>

        {/* Music */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-primary">Music I'm Listening To</h3>
          <ul className="list-disc list-inside space-y-1 text-muted text-sm md:text-base">
            <li>Lo-fi beats while coding</li>
            <li>Hans Zimmer soundtracks</li>
            <li>Indie Hindi — Prateek Kuhad, Anuv Jain</li>
          </ul>
        </div>

        {/* Books */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-primary">Books I've Read</h3>
          <ul className="list-disc list-inside space-y-1 text-muted text-sm md:text-base">
            <li>Atomic Habits by James Clear</li>
            <li>Deep Work by Cal Newport</li>
            <li>Zero to One by Peter Thiel</li>
            <li>The Almanack of Naval Ravikant</li>
          </ul>
        </div>

        {/* Movies */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-primary">Movie Recommendations</h3>
          <ul className="list-disc list-inside space-y-1 text-muted text-sm md:text-base">
            <li>Interstellar</li>
            <li>Good Will Hunting</li>
            <li>The Pursuit of Happyness</li>
            <li>Whiplash</li>
            <li>3 Idiots</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
