import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, Router } from 'react-router-dom';


const Dashboard = (props) => (
  
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token")

  useEffect (() =>{
    axios.get("http://localhost:8005/verify", {
      headers:{
        "Authorization": `bearer ${token}`
      }
    }) .then((res)=>{
      console.log(res)
    }) .catch ((err) => {
      console.log(err);
      const errormessage = err.response.data.message
      if(errormessage == "jwt expired") {
        localStorage.removeItem("auth_token")
        navigate("/signin")
      }
    })
    }, [])



    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" ry="1"></rect>
        <rect x="14" y="3" width="7" height="5" rx="1" ry="1"></rect>
        <rect x="14" y="12" width="7" height="9" rx="1" ry="1"></rect>
        <rect x="3" y="16" width="7" height="5" rx="1" ry="1"></rect>
    </svg>
);

const BarChart2 = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
        <line x1="4" y1="20" x2="20" y2="20"></line>
    </svg>
);

const Layers = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1.6l8.8 4.7-8.8 4.7L3.2 6.3 12 1.6z"></path>
        <path d="M21 12l-9 4.8-9-4.8"></path>
        <path d="M21 17l-9 4.8-9-4.8"></path>
    </svg>
);

const Settings = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 00-2 2v.44a2 2 0 01-1.11 1.78l-.34.17a2 2 0 00-.81 2.37l.08.34a2 2 0 01-.6 1.76l-.17.16a2 2 0 00-2.37.8l-.34.17a2 2 0 01-2 2v.44a2 2 0 012 2v.44a2 2 0 002 2l.34.17a2 2 0 01.81 2.37l-.08.34a2 2 0 00.6 1.76l.17.16a2 2 0 012.37.8l.34.17a2 2 0 002 2h.44a2 2 0 002-2v-.44a2 2 0 011.11-1.78l.34-.17a2 2 0 00.81-2.37l-.08-.34a2 2 0 01.6-1.76l.17-.16a2 2 0 002.37-.8l.34-.17a2 2 0 012-2v-.44a2 2 0 01-2-2v-.44a2 2 0 00-2-2l-.34-.17a2 2 0 01-.81-2.37l.08-.34a2 2 0 00-.6-1.76l-.17-.16a2 2 0 01-2.37-.8l-.34-.17a2 2 0 00-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const LogOut = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

const TrendingUp = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const Zap = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const CheckCircle = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const AlertTriangle = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);

// --- Static Data ---
const statCardsData = [
    {
        title: "Total Revenue",
        value: "$45,231",
        trend: "+12.5%",
        trendText: "vs. last month",
        trendColor: "text-secondary",
        borderColor: "border-primary",
        Icon: TrendingUp,
    },
    {
        title: "New Users",
        value: "2,450",
        trend: "+7.1%",
        trendText: "vs. last week",
        trendColor: "text-primary",
        borderColor: "border-secondary",
        Icon: Zap,
    },
    {
        title: "Tasks Completed",
        value: "92",
        trend: "98% On Time",
        trendText: "",
        trendColor: "text-green-500",
        borderColor: "border-yellow-500",
        Icon: CheckCircle,
    },
    {
        title: "Server Health",
        value: "99.9%",
        trend: "1 Minor Alert",
        trendText: "",
        trendColor: "text-red-500",
        borderColor: "border-red-500",
        Icon: AlertTriangle,
    },
];

const activityFeedData = [
    { name: "John", action: "added a new feature request.", time: "2 minutes ago", color: 'bg-secondary' },
    { name: "Data", action: "export to CSV completed.", time: "1 hour ago", color: 'bg-primary' },
    { name: "Marketing", action: "campaign launched.", time: "5 hours ago", color: 'bg-yellow-500' },
    { name: "Jane", action: "updated project documentation.", time: "1 day ago", color: 'bg-indigo-400' },
];

// --- Reusable Components ---

const StatCard = ({ title, value, trend, trendText, trendColor, borderColor }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${borderColor} hover:shadow-xl transition duration-300`}>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-extrabold text-gray-900 mt-1">{value}</p>
        <div className="flex items-center mt-3 text-sm">
            <span className={`${trendColor} font-semibold flex items-center`}>
                <Icon className="w-4 h-4 mr-1" />
                {trend}
            </span>
            {trendText && <span className="ml-2 text-gray-500">{trendText}</span>}
        </div>
    </div>
);

const ActivityItem = ({ name, action, time, color }) => (
    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg transition duration-150 hover:bg-gray-100">
        {/* User Avatar Placeholder */}
        <img 
            src={`https://placehold.co/32x32/${color.replace('bg-', '')}/ffffff?text=${name.charAt(0)}`}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/32x32/10b981/ffffff?text=${name.charAt(0)}`; }}
        />
        <div>
            <p className="text-sm font-medium text-gray-800">
                <span className="font-bold">{name}</span> {action}
            </p>
            <p className="text-xs text-gray-500">{time}</p>
        </div>
    </div>
);

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const navItems = [
        { name: "Dashboard", Icon: LayoutDashboard, active: true },
        { name: "Analytics", Icon: BarChart2, active: false },
        { name: "Projects", Icon: Layers, active: false },
        { name: "Settings", Icon: Settings, active: false },
    ];

    return (
        <aside
            className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-300 ease-in-out w-64 bg-white shadow-xl z-40 flex flex-col p-4 space-y-6`}
        >
            {/* App Logo */}
            <div className="flex items-center space-x-2 py-2">
                <LayoutDashboard className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-extrabold text-gray-800">Project Atlas</h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        onClick={toggleSidebar} // Close sidebar on mobile click
                        className={`flex items-center space-x-3 p-3 mt-2 rounded-xl font-semibold transition duration-150 ${
                            item.active
                                ? 'text-white bg-primary hover:bg-indigo-700'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                        }`}
                    >
                        <item.Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>

            {/* User Profile Footer */}
            <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition duration-150">
                    <img 
                        src="https://placehold.co/40x40/4f46e5/ffffff?text=J" 
                        alt="User Avatar" 
                        className="w-10 h-10 rounded-full object-cover shadow-md"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/4f46e5/ffffff?text=J'; }}
                    />
                    <div className="text-left">
                        <p className="text-sm font-semibold text-gray-800">Jane Doe</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                </div>
                <button className="w-full mt-2 flex items-center justify-center space-x-2 py-2 text-sm text-gray-600 hover:text-red-500 transition duration-150">
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
};

// --- Main App Component ---

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Define custom colors for Tailwind in this scope
    // const primary = '#4f46e5'; 
    // const secondary = '#10b981';

    return (
        <div className="bg-bg-light min-h-screen font-sans">
            
            {/* Mobile Sidebar Toggle Button */}
            <button 
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>

            {/* Sidebar Component */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            
            {/* Overlay for Mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden" 
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content Area */}
            <main className="lg:ml-64 p-4 md:p-8 transition-all duration-300 ease-in-out">
                
                {/* Header Section */}
                <header className="mb-8 pt-10 lg:pt-0">
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Welcome Back, Jane!</h1>
                    <p className="text-gray-500 mt-1">Here's your latest data and insights.</p>
                </header>

                {/* Stats Cards (Grid Layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {statCardsData.map((card, index) => (
                        <StatCard key={index} {...card} />
                    ))}
                </div>

                {/* Main Content Grid (Charts and Recent Activity) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Column 1 & 2: Main Visualization/Chart Area */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Performance (Last 6 Months)</h2>
                        {/* Placeholder for a Chart/Graph */}
                        <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                            <p className="text-gray-500 p-4 text-center">
                                Chart Visualization Placeholder. In a real app, this would render a library like **Recharts** or **D3.js**.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Recent Activity Feed */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                        <div className="space-y-3">
                            {activityFeedData.map((activity, index) => (
                                <ActivityItem key={index} {...activity} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;