import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/AppContext";

import { useState } from "react";
import Logo from "../../assets/Logo.png";

import { menuItem } from "../../types/menuItem";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const { state } = useGlobalContext();
  const path = window.location.pathname;
  return (
    <div
      className={`${
        !state.toggle
          ? "w-0 top-0 left-0 fixed  sm:static sm:w-0"
          : "w-[60%] sm:w-64 sm:static fixed top-0 left-0"
      } bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen  flex flex-col shadow-lg transition-all duration-500 z-40`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-20 border-b border-gray-700 ">
        {state.toggle && (
          <div className=" font-bold tracking-wide text-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
              <p className="text-[#49EB09] text-xl font-bold">
                <span className="text-white">Green</span>Labs
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul
          className={`space-y-2 cursor-pointer ${
            !state.toggle ? "hidden" : ""
          }`}
        >
          {menuItem.map((item, index) => (
            <li onClick={() => navigate(item.path)} key={index}>
              <p
                onClick={() =>
                  item.hasSubmenu ? setToggle(toggle) : navigate(item.path)
                }
                className={`flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group`}
              >
                <span
                  className={`text-lg ${
                    item.isLogout ? "text-red-400" : "text-green-400"
                  } group-hover:scale-110 transition-transform ${
                    !state.toggle ? "mx-auto" : ""
                  }`}
                >
                  {item.icon}
                </span>
                {state.toggle && (
                  <span
                    className={`ml-3 ${
                      item.isLogout
                        ? "group-hover:text-red-300"
                        : "group-hover:text-green-300"
                    } ${path === item.path ? "text-green-300" : ""}`}
                  >
                    {item.label}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`p-4 text-sm text-gray-400 border-t border-gray-700 ${
          !state.toggle ? "text-center hidden" : ""
        }`}
      >
        {state.toggle && `© ${new Date().getFullYear()} Green Labs Indonesia`}
      </div>
    </div>
  );
};

export default Sidebar;
