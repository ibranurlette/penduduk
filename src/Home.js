import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-home">
      <Header toggle={toggle} setToggle={setToggle} />

      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-white text-xl mb-3 underline">DATA</p>

        <Link to="/data-penduduk" className="text-blue-500">
          <div className="flex mb-4">
            <div className="mr-10 bg-aksen pt-3 pb-3 pl-4 w-60 rounded text-white">
              Data Penduduk
            </div>
            <div className="bg-aksen pt-3  pb-3 w-20 text-center rounded text-white">
              3 Data
            </div>
          </div>
        </Link>

        <Link to="/data-balita" className="text-blue-500">
          <div className="flex mb-4">
            <div className="mr-10 bg-aksen pt-3  pb-3 pl-4 w-60 rounded text-white">
              Data Balita
            </div>
            <div className="bg-aksen pt-3  pb-3 w-20 text-center rounded text-white">
              3 Data
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
