import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            OUTER SPACE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            JOURNEY THROUGH SPACE, SCIENCE, AND KNOWLEDGE
          </p>
          <p className="text-gray-300 max-w-2xl mb-8">
            ASTROLEX is your gateway to exploring the vastness of space, science, and math through interactive learning and real-time data. Discover a world of captivating courses, insightful articles, and engaging quizzes that make the wonders of the universe accessible to all.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}