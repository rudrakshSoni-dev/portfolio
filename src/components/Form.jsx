import React from 'react';

export default function Form() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="underline decoration-primary underline-offset-4   text-3xl font-bold text-white mb-6 text-center">Contact Me
        
      </h2>
      

      <form className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4 text-white">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
