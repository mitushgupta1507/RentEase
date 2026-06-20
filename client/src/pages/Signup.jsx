import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-12">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-700">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join RentEase today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5 mt-8" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 pr-20 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-indigo-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 pr-20 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-3 text-indigo-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Terms */}
          <div className="flex gap-2 items-center text-sm text-gray-600">
            <input type="checkbox" />
            <span>
              I agree to the Terms and Conditions
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <div className="text-center mt-8 text-gray-600">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-indigo-600 font-semibold"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;