import React from "react";
import { FiHome } from "react-icons/fi";
import { IoCreateSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen flex flex-col shadow-lg">
      <div className="p-6 text-2xl font-bold tracking-wide text-center border-b border-gray-700">
        <span className="text-green-400">My</span> Dashboard
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2 cursor-pointer">
          <li>
            <p
              onClick={() => navigate("/dashboard")}
              className="flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group"
            >
              <FiHome className="text-lg text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="ml-3 group-hover:text-blue-300">Dashboard</span>
            </p>
          </li>
          <li>
            <p
              onClick={() => navigate("/create-vote")}
              className="flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group"
            >
              <IoCreateSharp className="text-lg text-green-400 group-hover:scale-110 transition-transform" />
              <span className="ml-3 group-hover:text-green-300">
                Create Vote
              </span>
            </p>
          </li>
        </ul>
      </nav>
      <div className="p-4 text-sm text-gray-400 border-t border-gray-700">
        &copy; {new Date().getFullYear()} D-Voting. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
