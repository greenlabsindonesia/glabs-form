import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import glabs from "../assets/glabs.jpg";
import glabsicon from "../assets/glabsIcon.png";

const LoginForm: React.FC = () => {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative p-5">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={glabs}
        alt="Background"
      />
      <div className="relative z-20 w-full max-w-md p-6 backdrop-blur-md bg-white bg-opacity-10 rounded-lg shadow-lg md:p-8 lg:max-w-lg border border-gray-200 border-opacity-30">
        <div className="flex justify-center mb-6">
          <img className="w-32" src={glabsicon} alt="Logo" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300">Login to your account</p>

        <div className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300"
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-300"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="text-right mt-2">
              <a
                href="/forgot-password"
                className="text-sm text-green-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="button"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-300">
          <span>Don't have an account? </span>
          <a
            href="/register"
            className="text-green-400 hover:underline hover:text-green-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
