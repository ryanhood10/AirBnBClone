import React from "react";
import { Carousel } from "react-responsive-carousel";
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
    <div className="py-4 mt-96 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold py-2">Live Anywhere </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Adjust the interval as needed
        transitionTime={500} // Adjust the transition time as needed
        className="relative w-96 h-80"
        renderThumbs={() => {}}
      >
        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={BeachFront} alt="card" />
            <h3 className="text-2xl mt-3">Beachfront</h3>

          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={OutdoorLiving} alt="card" />
            <h3 className="text-2xl mt-3">Outdoor Living</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={Castles} alt="card" />
            <h3 className="text-2xl mt-3">Castles</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={TreeHouse} alt="card" />
            <h3 className="text-2xl mt-3">Treehouses</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={TinyHome} alt="card" />
            <h3 className="text-2xl mt-3">TinyHome</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={NationalPark} alt="card" />
            <h3 className="text-2xl mt-3">National Park</h3>
          </div>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <img src={UniqueStays} alt="card" />
            <h3 className="text-2xl mt-3">Unique Stays</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}