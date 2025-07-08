import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-gray-600 py-4 bg-white mt-10">
      <p>&copy; {new Date().getFullYear()} Rudraksh Soni</p>
    </footer>
  );
}