import React, { useState } from "react";
import { data } from '../data/data'; // Import your city data
import BannerImage from './assets/airbnbBanner1.png';

function Banner() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCardClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <img
        src={BannerImage}
        alt="banner"
        layout="fill"
        objectFit="cover"
        className=""
      />

      <div className="absolute top-1/4 w-full text-center">
        <p className="font-bold text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>
          <div className="flex flex-wrap justify-center">
            {data.map((city) => (
              <div
                key={city.id}
                className={`relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 cursor-pointer m-2 p-2 rounded-lg shadow-md hover:shadow-xl active:scale-90 transition duration-150`}
                onClick={() => handleCardClick(city)}
              >
                <img
                  src={city.image[0]}
                  alt={city.name}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-xl">
                  {city.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Banner;
