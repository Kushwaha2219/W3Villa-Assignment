import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../store/auth";

const Login = () => {
  const [Data, setData] = useState({ username: "", password: "" });
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn === true) {
    history("/");
  }

  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (Data.username === "" || Data.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "https://todo-xx87.onrender.com/api/v1/log-in",
          Data
        );
        setData({ username: "", password: "" });
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        dispatch(authActions.login());
        history("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 w-5/6 sm:w-2/4 lg:w-1/3 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Log In</h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Welcome back! Please enter your credentials to log in.
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
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700"
            onClick={submit}
          >
            Log In
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between text-sm">
          <Link
            to="/signup"
            className="text-blue-600 hover:underline"
          >
            Don’t have an account? Sign up
          </Link>
          <Link
            to="/reset-password"
            className="text-gray-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
