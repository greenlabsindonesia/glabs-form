import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegister } from "../hooks/useRegister";
import glabs from "../assets/glabs.jpg";
import glabsicon from "../assets/glabsIcon.png";
import Modal from "../components/Modal";
import { modalError, modalSuccess } from "../types/popUptype";
import { useGlobalContext } from "../context/AppContext";

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState<string>("");
  const { register, handleSubmit, errors, onSubmit, isLoading } = useRegister();
  const { state } = useGlobalContext();
  const handleFormSubmit = (data: any) => {
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
        <div className="flex justify-center mb-6">
          <img className="w-32" src={glabsicon} alt="Logo" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white">
          Create an Account
        </h2>
        <p className="text-center text-gray-300">Sign up to get started</p>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-300"
            />
            {errors.name && (
              <p className="text-red-400 text-sm ">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              disabled = {isLoading}
              className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-300"
            />
            {errors.email && (
              <p className="text-red-400 text-sm ">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                onChange={(e) => setPass(e.target.value)}
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

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-200">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              disabled={pass === ""}
              className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-300"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm ">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <div className="mt-6 text-center text-sm text-gray-300">
          <span>Already have an account? </span>
          <a
            href="/login"
            className="text-green-400 hover:underline hover:text-green-500"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
