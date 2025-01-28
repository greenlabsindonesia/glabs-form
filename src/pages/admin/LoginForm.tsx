import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { supabase } from "../../lib/supabase";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dataUser, setData] = useState<User[]>([]);
  const navigate = useNavigate();
  type User = {
    username: string;
    password: string;
    role: string;
    name: string;
  };

  const handleSubmit = () => {
    if (password === "" || username === "") {
      alert("Please enter both username and password");
      return;
    }
    navigate("/dashboard");

    // Check credentials
    const isValidUser = dataUser.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      alert("Login successful!");
      sessionStorage.setItem("role", dataUser.map((user) => user.role)[0]);
      sessionStorage.setItem("name", dataUser.map((user) => user.name)[0]);
      window.location.href = "/dashboard";
    } else {
      alert("Invalid username or password");
    }
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data, error } = await supabase
  //         .from("auth") // Replace "auth" with your table name
  //         .select("*");

  //       if (error) {
  //         console.error("Error fetching data:", error);
  //         return;
  //       }

  //       setData(data as User[]);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-green-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600">Login to your account</p>

        <div className="mt-6">
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="button"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <span>Don't have an account? </span>
          <a
            href="/register"
            className="text-blue-600 hover:underline hover:text-blue-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
