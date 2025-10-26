import React, { useState } from 'react';
import './common.css'; 
import studynotion from '../assets/studynotion.png';

export default function LargeProject() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Mega Project",
      imageUrl: studynotion,
      description:
        "A full-stack MERN application demonstrating a wide range of features, including user authentication, database management, and a dynamic React frontend. This project integrates MongoDB, Express.js, React, and Node.js to deliver a comprehensive web solution.",
      url: "https://megaproject09.netlify.app/"
    },
  ];

  const getShortDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const handleReadMoreClick = (projectId) => {
    setExpandedProjectId(prevId => (prevId === projectId ? null : projectId));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      
      {/* ✨ Stylish Gradient Heading ✨ */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
         Large Projects
      </h1>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-tr from-indigo-800 to-purple-800 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 flex flex-col border border-indigo-700/30"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-52 object-cover rounded-xl mb-4 shadow-md"
            />
            
            <h2 className="text-2xl font-semibold mb-2 text-white tracking-wide">{project.name}</h2>
            
            <p className="text-sm text-gray-300 flex-grow">
              {expandedProjectId === project.id
                ? project.description
                : getShortDescription(project.description, 10)}
              {project.description.split(' ').length > 10 && (
                <button
                  onClick={() => handleReadMoreClick(project.id)}
                  className="mt-2 block text-blue-400 text-sm hover:underline"
                >
                  {expandedProjectId === project.id ? 'Show Less' : 'Read More'}
                </button>
              )}
            </p>
            
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-center py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-md"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
