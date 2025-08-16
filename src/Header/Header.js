import { useState, useRef, useEffect } from "react";
import {
  FaCogs,
  FaInfoCircle,
  FaAddressBook,
  FaIdBadge,
  FaHome,       // Added for Dashboard/Home
  FaUserCircle, // Added for My Profile
  FaSignOutAlt, // Added for Logout
  FaChartBar, // Added for Dashboard
} from "react-icons/fa";
import ServicesPage from './PersonalInfo';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { Link } from "react-router-dom";
import hplogo from '../assets/hplogoupdated.jpeg';
import { IoMenu } from "react-icons/io5";
import Navbar from './Navbar';
import './Header.css'; // or './styles.css'
import { MdCancel } from "react-icons/md";
import Dashboard from "./Dashboard";
import MyProfile from "./MyProfile ";
import LogoutPage from "./LogoutPage";
import ContactEntries from "./ContactEntries";
export const profileMenuItems = [
  { label: "Home", icon: <FaHome />, path: "/", element: null },
  { label: "Dashboard", icon: <FaChartBar />, path: "/dashboard", element: <Dashboard/> }, // Common dashboard link
  { label: "My Profile", icon: <FaUserCircle />, path: "/dashboard/my-profile", element: <MyProfile/> }, // User's own profile
  { label: "Services", icon: <FaIdBadge />, path: "/services", element: <ServicesPage /> },
  { label: "Settings", icon: <FaCogs />, path: "/settings", element: <SettingsPage /> },
  { label: "About Us", icon: <FaInfoCircle />, path: "/about", element: <AboutPage /> },
  { label: "Contact Us", icon: <FaAddressBook />, path: "/contact", element: <ContactPage /> },
  { label: "Logout", icon: <FaSignOutAlt />, path: "/logout", element: <LogoutPage/> }, // Logout option
  { label: "View Entries", icon: <FaChartBar />, path: "/contact/entries", element: <ContactEntries /> },
];

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-container">
      
      {/* Left - Menu */}
      <div ref={profileRef} className="menu-icon relative">
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="text-3xl"
          aria-label="Menu"
        >
          {profileOpen ? <MdCancel /> : <IoMenu />}
        </button>

        {profileOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 mt-2 w-52 bg-blue-900/90 backdrop-blur-md text-white rounded-md shadow-lg z-50"
          >
            {profileMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 transition duration-150"
                onClick={() => setProfileOpen(false)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Center - Navbar (Horizontally scrollable if needed) */}
       <div className="flex-grow min-w-0 overflow-x-auto whitespace-nowrap text-center no-scrollbar mx-2 sm:mx-4">
        <Navbar />
</div>


      {/* Right - Logo */}
      <div className="logo-container">
          <img
          src={hplogo}
          alt="HP Logo"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full"/>
      </div>
    </header>
  );
}
