import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLoader } from "react-icons/fi";
import glabs from "../assets/glabs.jpg";
import glabsicon from "../assets/glabsIcon.png";
import { MdCheckCircle } from "react-icons/md";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setMessage("Check your email and open the link we sent to continue");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative p-5">
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
          Reset Password
        </h2>
        <p className="text-center text-gray-300 mb-4">
          Enter your email to reset your password.
        </p>
        {message && (
          <div className="w-full bg-green-700 rounded-md p-4 mb-4 text-sm text-gray-100">
            <div className="flex items-center  space-x-1 text-green-500">
              <p className="text-white text-base">Email Sent</p>
              <MdCheckCircle className="text-white w-5 h-5" />
            </div>
            <p className="text-gray-300 text-sm">{message}</p>
          </div>
        )}
        <form onSubmit={handleResetPassword} className="mt-4">
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 placeholder-gray-300 pl-10"
                required
              />
              <FiMail className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none flex justify-center items-center space-x-1 ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
          >
            <p>Sent Reset Link</p>
            {isLoading && <FiLoader className="animate-spin w-5 h-5" />}
          </button>
        </form>
        <div className="mt-4 text-center flex justify-center">
          <p
            onClick={() => navigate("/login")}
            className="text-sm w-36  text-green-400 hover:underline hover:text-green-500 cursor-pointer"
          >
            Back to Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
