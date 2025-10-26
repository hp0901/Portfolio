import React, { useState } from 'react';
import './common.css'; 
import passwordgenerator from '../photos/pg.png';
import googlesearch from '../photos/gs.png';

export default function MidiumProject() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Google Search Redirect",
      imageUrl: googlesearch,
      description: "This interactive web application allows users to input a search query and instantly redirects them to Google, displaying relevant search results. It demonstrates dynamic URL manipulation, user input handling, and a practical application of client-side redirection to streamline information retrieval.",
      url: "https://redirect-google-hp.netlify.app/"
    },
    {
      id: 2,
      name: "Random Password Generator (with Advanced Features)",
      imageUrl: passwordgenerator,
      description: "A robust and secure random password generator built with JavaScript. This project offers comprehensive customization, allowing users to select character types (uppercase, lowercase, numbers, special symbols) and set password length. It also provides real-time strength feedback (weak, medium, strong) visually, demonstrating strong logical implementation and user interface design for enhanced security.",
      url: "https://password-generator-hp.netlify.app/"
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
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 project-card" onMouseMove={handleMouseMove}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
        Medium Projects
        </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-tr from-indigo-800 to-purple-800 p-6 rounded-2xl shadow-lg transform  hover:scale-105 transition-all duration-500 flex flex-col"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-auto max-h-auto object-contain rounded-xl mb-4 shadow-md"
            />
            <h2 className="text-xl font-semibold mb-2 text-white">{project.name}</h2>
            
            <p className="text-sm text-gray-300 flex-grow">
              {expandedProjectId === project.id 
                ? project.description
                : getShortDescription(project.description, 10)
              }
              {project.description.split(' ').length > 10 && (
              <button
                onClick={() => handleReadMoreClick(project.id)}
                className="mt-2 self-start text-blue-400 text-sm hover:underline"
              >
                {expandedProjectId === project.id ? 'Show Less' : 'Read More'}
              </button>
            )}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmering-border-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}