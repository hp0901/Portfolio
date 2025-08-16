import './App.css';
import Header, { profileMenuItems } from './Header/Header';
import Footer from './Footer/Footer';
import MiniProject from './Project/MiniProject';
import MidiumProject from './Project/MidiumProject';
import LargeProject from './Project/LargeProject';
import { Routes, Route } from "react-router-dom";
import Testimonials from './Footer/Testimonials';
import Vision from './Header/Vision';
import React, { useState, useEffect } from 'react';
function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="relative flex items-center justify-center h-40 w-40 rounded-full border-t-4 border-purple-500 animate-spin-slow">
        {/* Shiny Name (stays still) */}
        <h1 className="text-xl font-bold relative overflow-hidden text-center">
          <span className="animate-shine bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent">
            Harsh Patel
          </span>
        </h1>
      </div>

      {/* Custom animations */}
      <style>
        {`
          /* Shine animation for text */
          @keyframes shine {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
          .animate-shine {
            background-size: 200% auto;
            animation: shine 1.5s linear infinite;
          }

          /* Slow rotation for border */
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
}



  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans overflow-x-hidden">
      <Header />
     
      <main className="px-4 md:px-16 py-10 space-y-20">
        <Routes>
          <Route path="/" element={
            <>
              <section className="z-10 transform transition-all duration-500 shadow-2xl rounded-3xl bg-white/5 dark:bg-black/10 backdrop-blur p-6 hover:scale-[1.02]">
                <MiniProject />
              </section>
              <section className="z-10 transform transition-all duration-500 shadow-2xl rounded-3xl bg-white/5 dark:bg-black/10 backdrop-blur p-6 hover:scale-[1.02]">
                <MidiumProject />
              </section>
              <section className="z-10 transform transition-all duration-500 shadow-2xl rounded-3xl bg-white/5 dark:bg-black/10 backdrop-blur p-6 hover:scale-[1.02]">
                <LargeProject />
              </section>
            </>
          } />
          <Route path="/vision" element={<Vision />} />
          {/* Dynamically render routes from profileMenuItems */}
          {profileMenuItems.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </main>
        <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
