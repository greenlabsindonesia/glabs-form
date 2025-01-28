import { IoMdLogOut } from "react-icons/io";

const Header: React.FC = () => {
  const path = window.location.pathname;

  return (
    <header className="bg-white border border-b shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 ">
        {/* Logo or Dashboard Title */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          {path === "/create-vote" ? "Create Vote" : "Dashboard"}
        </h1>

        {/* User Actions */}
        <div className="flex items-center space-x-6">
          {/* Welcome Text */}
          <span className="text-gray-800 font-medium">
            Welcome,{" "}
            <span className="text-blue-500 font-semibold">
              {sessionStorage.getItem("name")}
            </span>
          </span>

          {/* Logout Button */}
          <button
            className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
            aria-label="Logout"
          >
            <IoMdLogOut className="text-xl" />
            <span className="ml-1 text-sm">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
