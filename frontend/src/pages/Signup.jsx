import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../components/Home/Loader";

const Signup = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    navigate("/");
  }

  const [Data, setData] = useState({ username: "", email: "", password: "" });
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    if (!Data.username || !Data.email || !Data.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://todo-xx87.onrender.com/api/v1/sign-in",
        Data
      );
      setMessage(response.data.message);
      setLoading(false);

      // Clear form data and redirect after success
      setData({ username: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay navigation to show success message
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {Loading && (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      )}
      {!Loading && Message && (
        <div className="text-center">
          <div className="text-yellow-500 text-xl bg-white border border-yellow-500 font-semibold rounded px-4 py-3 shadow-md">
            {Message}
          </div>
        </div>
      )}
      {!Loading && !Message && (
        <div className="p-8 w-5/6 sm:w-2/4 lg:w-1/3 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Sign Up
          </h2>
          <p className="text-gray-600 text-sm mb-6 text-center">
            Create your account to get started!
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="text-gray-700 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="username"
                value={Data.username}
                onChange={change}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="text-gray-700 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={Data.email}
                onChange={change}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="text-gray-700 w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                value={Data.password}
                onChange={change}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={submit}
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between text-sm">
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Already have an account? Login
            </Link>
            <Link
              to="/reset-password"
              className="text-gray-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
