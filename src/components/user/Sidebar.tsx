import { RxDashboard } from "react-icons/rx";
import { SiGoogleforms } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/AppContext";
import { MdHistory } from "react-icons/md";
import { useState } from "react";
import Logo from "../../assets/Logo.png";

const Sidebar: React.FC = () => {
  const itemPembayaran = [
    "Powder X-ray Diffraction (P-XRD)",
    "X-ray Fluorescence (WD-XRF)",
    "Fourier-Transform Infrared (FTIR)",
    "Gas chromatography (GC-MS)",
    "1H and 19F NMR",
    "AAS",
    "UV-Visible (UV-Vis) Spectroscopy",
    "Differential Scanning Calorimetry (DSC)",
  ];
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const { state } = useGlobalContext();
  const path = window.location.pathname;
  return (
    <div
      className={`${
        state.toggle ? "w-0 top-0 left-0  sm:static sm:w-0" : "w-[60%] sm:w-64 sm:static fixed top-0 left-0"
      } bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen  flex flex-col shadow-lg transition-all duration-500 z-40`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-20 border-b border-gray-700 ">
        {!state.toggle && (
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
        <ul className={`space-y-2 cursor-pointer ${state.toggle ? "hidden" : ""}`}>
          {/* Dashboard */}
          <li>
            <p
              onClick={() => navigate("/my")}
              className={`flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group `}
            >
              <RxDashboard
                className={`text-lg text-green-400 group-hover:scale-110 transition-transform ${
                  state.toggle ? "mx-auto " : ""
                }`}
              />
              {!state.toggle && (
                <span
                  className={`ml-3 ${
                    path === "/dashboard" ? "text-green-300" : ""
                  } group-hover:text-green-300`}
                >
                  Dashboard
                </span>
              )}
            </p>
          </li>
          {/* Lab services */}
          <li>
            <p
              onClick={() => setToggle(!toggle)}
              className="flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group"
            >
              <SiGoogleforms
                className={`text-lg text-green-400 group-hover:scale-110 transition-transform ${
                  state.toggle ? "mx-auto" : ""
                }`}
              />
              {!state.toggle && (
                <span className="ml-3 group-hover:text-green-300">
                 Lab Services
                </span>
              )}
              {!state.toggle && (
                <span
                  className={`ml-3 group-hover:text-green-300 transform transition-transform ${
                    toggle ? "rotate-180 duration-500" : "rotate-0 duration-500"
                  }`}
                >
                  🡣
                </span>
              )}
            </p>
            {/* Submenu */}
            <ul
              className={`scrollbar-hide overflow-hidden transition-all ease-in-out  ${
                toggle ? "max-h-56 sm:max-h-screen overflow-y-auto opacity-100 duration-500 " : "max-h-0 opacity-0 duration-500"
              }`}
            >
              {itemPembayaran.map((item, index) => (
                <li
                onClick={() => navigate("/form")}
                  key={index}
                  className="py-2 px-12 text-sm transition-all hover:text-green-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
          {/* Riwayat */}
          <li>
            <p
              onClick={() => navigate("/history")}
              className="flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group"
            >
              <MdHistory
                className={`text-lg text-green-400 group-hover:scale-110 transition-transform ${
                  state.toggle ? "mx-auto" : ""
                }`}
              />
              {!state.toggle && (
                <span className="ml-3 group-hover:text-green-300">Riwayat</span>
              )}
            </p>
          </li>
          {/* Logout */}
          <li>
            <p
              onClick={() => navigate("/logout")}
              className="flex items-center p-4 text-sm font-medium transition-all rounded-md hover:bg-gray-700 hover:shadow-md group"
            >
              <IoMdLogOut
                className={`text-lg text-red-400 group-hover:scale-110 transition-transform ${
                  state.toggle ? "mx-auto" : ""
                }`}
              />
              {!state.toggle && (
                <span className="ml-3 group-hover:text-red-300">Logout</span>
              )}
            </p>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`p-4 text-sm text-gray-400 border-t border-gray-700 ${
          state.toggle ? "text-center hidden" : ""
        }`}
      >
        {!state.toggle && `© ${new Date().getFullYear()} Green Labs Indonesia`}
      </div>
    </div>
  );
};

export default Sidebar;
