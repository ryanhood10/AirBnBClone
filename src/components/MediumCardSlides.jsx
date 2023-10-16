import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MediumCard from "./MediumCard"; // Import your MediumCard component here

// Import your image assets here
import OutdoorLiving from "./assets/outdoorLiving.png";
import Castles from "./assets/Castles.png";
import TreeHouse from "./assets/treehouse.png";
import BeachFront from "./assets/beachfront.png";
import TinyHome from "./assets/tinyhome.png";
import NationalPark from "./assets/NationalPark.png";
import UniqueStays from "./assets/UniqueStay.png";

/// Define your card data here
const cardData = [
    {
      id: 1,
      image: BeachFront,
      title: "Beachfront",
    },
    {
      id: 2,
      image: OutdoorLiving,
      title: "Outdoor Living",
    },
    {
      id: 3,
      image: Castles,
      title: "Castles",
    },
    {
      id: 4,
      image: TreeHouse,
      title: "Treehouses",
    },
    {
      id: 5,
      image: TinyHome,
      title: "TinyHome",
    },
    {
      id: 6,
      image: NationalPark,
      title: "National Park",
    },
    {
      id: 7,
      image: UniqueStays,
      title: "Unique Stays",
    },
  ];
  
export default function MediumCardSlides() {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold py-8">Live Anywhere</h1>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide">
        {cardData.map((card) => (
          <MediumCard key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
}
