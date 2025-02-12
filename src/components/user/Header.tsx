// import { IoMdLogOut } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { useGlobalContext } from "../../context/AppContext";
// import avatarUrl from '../../assets/amel.jpeg'

const Header: React.FC = () => {
  
//   const path = window.location.pathname;
  const { state, stateHandle } = useGlobalContext();
  return (
    <header className={`bg-white shadow-md sticky top-0 z-40 ${!state.toggle ? " duration-500 transition-all ease-in-out  " : "ml-[60%] duration-500 transition-all ease-in-out sm:ml-0"  }`}>
      <div className="flex justify-between items-center px-4 h-20">
        {/* Logo or Dashboard Title */}
        <span
          onClick={() => stateHandle("toggle", !state.toggle)}
          className="cursor-pointer"
        >
          <FaBars className="text-lg hover:text-green-400 hover:scale-110 transition-transform" />
        </span>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          {/* Notification Bell */}
          <div className="relative">
            <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-green-400" />
            {2 > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {2}
              </span>
            )}
          </div>

          {/* User Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
