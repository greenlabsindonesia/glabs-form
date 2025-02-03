import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import glabs from "../assets/glabs.jpg";
import glabsicon from "../assets/glabsIcon.png";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { LoginSchemaType } from "../schemas/loginSchemas";
import { useGlobalContext } from "../context/AppContext";
import Modal from "../components/Modal";
import { useModalError, useModalSuccess } from "../types/popUptype";
import { FiLoader } from "react-icons/fi";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, onSubmit, errors, isLoading, handleSubmit } = useLogin();
  const navigate = useNavigate();
  const { state } = useGlobalContext();

  const modalSuccess = useModalSuccess();
  const modalError = useModalError();
  const handleFormSubmit = (data: LoginSchemaType) => {
    onSubmit(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative p-5">
      <div className="z-50">
        {state.error && (
          <Modal
            Icon={modalError.Icon}
            titleMessage={modalError.titleMessage}
            message={modalError.message}
          />
        )}
        {state.success && (
          <Modal
            Icon={modalSuccess.Icon}
            titleMessage={modalSuccess.titleMessage}
            message={modalSuccess.message}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={glabs}
        alt="Background"
      />
      <div className="relative z-20 w-full max-w-md p-6 backdrop-blur-md bg-white bg-opacity-10 rounded-lg shadow-lg md:p-8 lg:max-w-lg border border-gray-200 border-opacity-30">
        <div className="flex justify-center mb-4">
          <img className="w-32" src={glabsicon} alt="Logo" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300">Login to your account</p>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-300 pr-10"
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
            {errors.password && (
              <p className="text-red-400 text-sm ">{errors.password.message}</p>
            )}
          </div>
          <div className="flex justify-end mb-4">
            <p
              onClick={() => navigate("/forgot-password")}
              className="text-green-400 hover:underline hover:text-green-500 cursor-pointer text-sm"
            >
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 flex space-x-1 justify-center items-center items-center${
              isLoading ? " cursor-not-allowed" : ""
            }`}
          >
            <p className="">Sign Up</p>
            {isLoading && (
              <FiLoader className="text-white animate-spin w-5 h-5" />
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-300 flex justify-center space-x-1">
          <span>Don't have an account? </span>
          <p
            onClick={() => navigate("/register")}
            className="text-green-400 hover:underline hover:text-green-500 cursor-pointer"
          >
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
