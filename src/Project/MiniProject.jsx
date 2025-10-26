import React, { useState } from 'react';
import './common.css'; // Assuming you have a common.css for shared styles
import testomonials from '../photos/testimonials.png';
import reactToast from '../photos/toast.png';

export default function MiniProject() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "React Hot Toast Integration",
      imageUrl: reactToast,
      description: "This project showcases the seamless integration of react-hot-toast, a lightweight and highly customizable notification library. It demonstrates how to implement elegant and user-friendly 'toast' messages for various events like success, error, and loading states, enhancing the overall user experience with subtle, yet effective, feedback.",
      url: "https://react-toast-hp.netlify.app/"
    },
    {
      id: 2,
      name: "Testimonials Carousel/Section",
      imageUrl: testomonials,
      description: "A clean and responsive component dedicated to displaying customer testimonials. This project highlights my ability to structure dynamic content, often featuring a carousel or slider, to effectively build trust and social proof by showcasing positive user feedback in an engaging way.",
      url: "https://testomenials.netlify.app/"
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
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
        Mini Projects
        </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-tr from-indigo-800 to-purple-800 p-6 rounded-2xl
                       transform hover:scale-105 transition-all duration-500 flex flex-col"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-auto max-h-auto object-contain rounded-xl mb-4 shadow-md"/>
            <h2 className="text-xl font-semibold mb-2 text-white">{project.name}</h2>
            <p className="text-sm text-gray-300 flex-grow">
              {expandedProjectId === project.id
                ? project.description
                : getShortDescription(project.description, 10)
              }
              {project.description.split(' ').length > 10 && (
                <button
                  onClick={() => handleReadMoreClick(project.id)}
                  className="ml-1 text-blue-400 text-sm hover:underline"
                >
                  {expandedProjectId === project.id ? 'Show Less' : 'Read More'}
                </button>
              )}
            </p>
            {/* The A tag with animated border using Tailwind & Pseudo-elements */}
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