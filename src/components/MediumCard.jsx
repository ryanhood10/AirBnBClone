import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import your image assets here
import OutdoorLiving from "./assets/outdoorLiving.png";
import Castles from "./assets/Castles.png";
import TreeHouse from "./assets/treehouse.png";
import BeachFront from "./assets/beachfront.png";
import TinyHome from "./assets/tinyhome.png";
import NationalPark from "./assets/NationalPark.png";
import UniqueStays from "./assets/UniqueStay.png";

export default function MediumCard() {
  

  return (
    <div className="py-4 mt-56 sm:mt-96 max-w-7xl px-64">
            <h1 className="text-4xl font-semibold py-8">Live Anywhere</h1>
     <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out rounded-xl">
            <img src={BeachFront} alt="card" className="rounded-xl" />
            <h3 className="text-2xl mt-3">Beachfront</h3>

          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={OutdoorLiving} alt="card" className="rounded-xl"/>
            <h3 className="text-2xl mt-3">Outdoor Living</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={Castles} alt="card" className="rounded-xl"/>
            <h3 className="text-2xl mt-3">Castles</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={TreeHouse} alt="card" className="rounded-xl"/>
            <h3 className="text-2xl mt-3">Treehouses</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={TinyHome} alt="card" className="rounded-xl"/>
            <h3 className="text-2xl mt-3">TinyHome</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={NationalPark} alt="card" className="rounded-xl" />
            <h3 className="text-2xl mt-3">National Park</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={UniqueStays} alt="card" className="rounded-xl"/>
            <h3 className="text-2xl mt-3">Unique Stays</h3>
          </div>
        </div>

        </div>
    </div>
  );
}