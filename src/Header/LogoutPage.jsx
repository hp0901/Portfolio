import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';

const LogoutPage = () => {
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setLoggedOut(true);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (loggedOut) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full transform transition duration-500 hover:scale-105">
        <div className="text-6xl mb-4 animate-bounce">🎉</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Logged Out Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thanks for visiting. Click the button below to go back home.
        </p>
        <button
          onClick={handleGoHome}
          className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 duration-300 mx-auto"
        >
          <HomeIcon className="w-6 h-6" />
          Go to Home
        </button>
      </div>
    </div>
  );
}


  // Confirmation view
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-400 to-pink-500 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Are you sure you want to logout?</h1>
        <p className="text-gray-600 mb-6">You will be redirected to a confirmation page.</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
