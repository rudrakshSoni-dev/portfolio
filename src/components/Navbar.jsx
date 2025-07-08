import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow px-6 py-4 bg-background text-text">
      <div className="flex justify-between items-center">
        {/* Logo + Dot */}
        <div className="flex items-center space-x-1">
          <Link to="/" className="text-xl font-bold ">
            RS
          </Link>
          <svg width="6" height="6" xmlns="http://www.w3.org/2000/svg" className="inline-block mt-3.5">
            <rect width="4" height="4" fill="#03f0fc" />
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/projects" className="p-2 rounded hover:bg-white/10 transition">Projects</Link>
          <Link to="/blog" className="p-2 rounded hover:bg-white/10 transition">Blog</Link>
          <Link to="/library" className="p-2 rounded hover:bg-white/10 transition">Library</Link>
         <a href="https://github.com/rudrakshSoni-dev" className="p-2 rounded hover:bg-white/10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github " viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                </a>
          <Link to="/" className="p-2 rounded hover:bg-white/10 transition">
            {/* Settings icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl p-2 rounded hover:bg-white/10 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden">
          <Link to="/projects" className="p-2 rounded hover:bg-white/10 transition">Projects</Link>
          <Link to="/blog" className="p-2 rounded hover:bg-white/10 transition">Blog</Link>
          <Link to="/library" className="p-2 rounded hover:bg-white/10 transition">Library</Link>
          <a href="https://github.com/rudrakshSoni-dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-white/10 transition">GitHub</a>
          <Link to="/settings" className="p-2 rounded hover:bg-white/10 transition">Settings</Link>
        </div>
      )}
    </nav>
  );
}
