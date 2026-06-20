import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/products");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* Heading */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue to RentEase
          </p>
        </div>

        {/* Form */}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

          {/* Email */}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-indigo-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Remember + Forgot */}

          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>

          {/* Divider */}

          <div className="flex items-center">

            <div className="flex-grow h-px bg-gray-300"></div>

            <span className="px-4 text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-grow h-px bg-gray-300"></div>

          </div>

          {/* Google Button */}

          <button
            type="button"
            className="w-full border py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

        </form>

        {/* Signup */}

        <div className="text-center mt-8 text-gray-600">

          Don't have an account?

          <Link
            to="/signup"
            className="ml-2 text-indigo-600 font-semibold hover:text-indigo-700"
          >
            Sign Up
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;