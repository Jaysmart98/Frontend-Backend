import React, { useState, useEffect } from 'react';

// Using inline SVG icons to ensure functionality in isolated environments
const Users = (props) => (<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 01-3-3.87m-2-12a4 4 0 011 7.87"/></svg>);
const DollarSign = (props) => (<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>);
const ListChecks = (props) => (<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11h4"/><path d="M12 17h4"/><path d="M12 7h4"/><path d="M3 5l2 2 4-4"/><path d="M3 12l2 2 4-4"/><path d="M3 19l2 2 4-4"/></svg>);
const TrendingUp = (props) => (<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>);
const RefreshCw = (props) => (<svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 11-2.12-9.98L23 10"/></svg>);


// Define the structure for our data state
const initialDashboardData = {
  users: 0,
  sales: 0,
  tasks: 0,
  revenue: 0,
};

// Mock function to simulate an API call
const simulateDataFetch = () => {
  return new Promise(resolve => {
    // Simulate network delay and slightly randomized data for effect
    setTimeout(() => {
      resolve({
        users: Math.floor(1500 + Math.random() * 100),
        sales: Math.floor(40000 + Math.random() * 5000),
        tasks: Math.floor(10 + Math.random() * 5),
        revenue: (80000 + Math.random() * 10000).toFixed(2),
      });
    }, 1500); // 1.5 second delay
  });
};

/**
 * Dashboard Card Component
 */
const StatCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <Icon className={`w-5 h-5 ${colorClass}`} />
    </div>
    <div className="mt-1 text-3xl font-bold text-gray-900">
      {/* Format value based on context */}
      {title.includes("Revenue") || title.includes("Sales") ? `$${Number(value).toLocaleString()}` : Number(value).toLocaleString()}
    </div>
  </div>
);

/**
 * Main Application Component
 */
const App = () => {
  // State for the dashboard data (useState)
  const [data, setData] = useState(initialDashboardData);
  // State for the loading status (useState)
  const [isLoading, setIsLoading] = useState(true);
  // State for the last update time (useState)
  const [lastUpdated, setLastUpdated] = useState(null);

  /**
   * Function to fetch data.
   */
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const fetchedData = await simulateDataFetch();
      setData(fetchedData);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Effect hook to run fetchData once on component mount (useEffect)
   */
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once.

  // Define the cards structure using the state data
  const cards = [
    {
      title: 'Total Users',
      value: data.users,
      icon: Users,
      colorClass: 'text-blue-600',
    },
    {
      title: 'Total Revenue',
      value: data.revenue,
      icon: TrendingUp,
      colorClass: 'text-green-600',
    },
    {
      title: 'Monthly Sales',
      value: data.sales,
      icon: DollarSign,
      colorClass: 'text-yellow-600',
    },
    {
      title: 'Open Tasks',
      value: data.tasks,
      icon: ListChecks,
      colorClass: 'text-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
        /* Corrected CSS syntax for use within JSX */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        `}
      </style>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Analytics Dashboard
        </h1>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="text-sm text-gray-600">
            {isLoading ? 'Loading data...' : `Data last updated: ${lastUpdated}`}
          </p>
          <button
            onClick={fetchData}
            disabled={isLoading}
            className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition duration-300 shadow-md
              ${isLoading
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800'
              }`}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>
      </header>

      {/* Main Content: Responsive Grid of Cards */}
      <main>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              colorClass={card.colorClass}
            />
          ))}
        </div>

        {/* Placeholder for additional content */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg min-h-[300px]">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Reports</h2>
          <p className="text-gray-600">
            This area is reserved for charts or tables. The current data is managed by **useState** and updated by **useEffect** to simulate a real-time application.
          </p>
        </div>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500">
        Dashboard Demo created with React Hooks (useState & useEffect)
      </footer>
    </div>
  );
};

export default App;