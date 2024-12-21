import React, { useState } from 'react';
import { FiHome, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { Button } from '@mui/material';
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Dash_Home from '../Components/Dash_Home';
import Dash_Complaint from '../Components/Dash_Complaint';
import Dash_Email from '../Components/Dash_Email';
import Dash_Header from '../Components/Dash_Header';
import { useLocation } from 'react-router-dom';


// Sidebar component
const Sidebar = ({ isOpen, toggleSidebar, onSelectItem }) => (
  <div
    className={`bg-gray-800 text-white h-screen p-4 flex flex-col ${
      isOpen ? 'w-64' : 'w-16'
    } transition-all duration-300`}
  >
    <div className="flex items-center justify-between mb-8">
      {isOpen && <h2 className="text-lg font-bold">Dashboard</h2>}
      <button className="text-xl focus:outline-none" onClick={toggleSidebar}>
        {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
      </button>
    </div>
    <nav className="flex flex-col gap-4">
      <SidebarItem
        isOpen={isOpen}
        icon={<FiHome />}
        label="Home"
        onClick={() => onSelectItem('home')}
      />
      <SidebarItem
        isOpen={isOpen}
        icon={<MdOutlineAnalytics />}
        label="Complaints"
        onClick={() => onSelectItem('Complaints')}
      />
      <SidebarItem
        isOpen={isOpen}
        icon={<FiUsers />}
        label="Emails"
        onClick={() => onSelectItem('emails')}
      />
      <SidebarItem
        isOpen={isOpen}
        icon={<FiSettings />}
        label="Settings"
        onClick={() => onSelectItem('settings')}
      />
    </nav>
    <div className="mt-auto">
      <SidebarItem
        isOpen={isOpen}
        icon={<FiLogOut />}
        label="Logout"
        onClick={() => onSelectItem('logout')}
      />
    </div>
  </div>
);

// SidebarItem component
const SidebarItem = ({ isOpen, icon, label, onClick }) => (
  <div
    className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
    onClick={onClick}
  >
    <span className="text-xl">{icon}</span>
    {isOpen && <span>{label}</span>}
  </div>
);

// MainSection component
const MainSection = ({ currentSection }) => {
  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Dash_Home/>;
      case 'Complaints':
        return <Dash_Complaint/> ;
      case 'emails':
        return <Dash_Email/>;
      case 'settings':
        return <div>Setting</div>;
      case 'logout':
        return <div>logOut</div>;
      default:
        return <Dash_Home/>;
    }
  };

  return <div className="flex-1 p-6">{renderContent()}</div>;
};


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('dashboard'); // Default section

  const toggleSidebar = () => setIsOpen(!isOpen);

  const location = useLocation()
  const user = location.state || {}
  return (
    
    <div className="flex bg-gray-100 h-screen">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        onSelectItem={setCurrentSection}
      />
      <div className='w-full'>
      <Dash_Header username={user.username} email={user.email}/>
      <MainSection currentSection={currentSection} />
      </div>
    </div>
  );
};

export default Dashboard;
