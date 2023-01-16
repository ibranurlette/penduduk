import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-home">
      <Header toggle={toggle} setToggle={setToggle} />

      {/* REGISTER */}

      <div
        className="h-screen flex flex-col 
                    items-center justify-center"
      >
        <p className="text-white text-xl mb-3">REGISTER</p>

        <form>
          <input
            aria-label="Enter your username"
            type="text"
            placeholder="Username"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-14 border border-gray-200 rounded mb-2"
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-14 border border-gray-200 rounded mb-2"
          />

          <Link to="/">
            <button
              type="submit"
              className="bg-aksen w-full mt-4 text-white h-14"
            >
              Register
            </button>
          </Link>
          <p className="text-white mt-3 text-center">
            Punya akun ?
            <Link to="/" className="text-blue-500">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
