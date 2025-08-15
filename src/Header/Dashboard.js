import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LineChart, Line, PieChart, Pie } from 'recharts';
import { BellIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';


const currentUser = {
  name: 'Harsh Patel',
  avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  role: 'Admin',
};

const lineData = [
  { date: 'Mon', users: 400 },
  { date: 'Tue', users: 600 },
  { date: 'Wed', users: 800 },
  { date: 'Thu', users: 700 },
  { date: 'Fri', users: 900 },
];

const pieData = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Cancelled', value: 100 },
];

const Dashboard = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-gray-900 text-gray-100'} min-h-screen font-sans`}>
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <BellIcon className="h-6 w-6" />
          <img src={currentUser.avatar} alt="" className="w-8 h-8 rounded-full" />
          <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '🔆'}</button>
          <button onClick={handleLogout}>
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-red-500" />          </button>
        </div>
      </header>

      <main className="p-6 overflow-y-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border shadow-sm">
            <h3 className="text-sm text-gray-500">Users This Week</h3>
            <p className="text-2xl font-bold">4,200</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border shadow-sm">
            <h3 className="text-sm text-gray-500">Courses Enrolled</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border shadow-sm">
            <h3 className="text-sm text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold">₹2,50,000</p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-4 shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Weekly Active Users</h4>
            <LineChart width={300} height={200} data={lineData}>
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border p-4 shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Course Completion</h4>
            <PieChart width={300} height={200}>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#f59e0b" label />
            </PieChart>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
