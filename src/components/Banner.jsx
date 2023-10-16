import React, { useEffect, useState } from "react";
import { data } from '../data/data'; // Import your city data
import BannerImage from './assets/airbnbBanner1.png';
import { useGeolocated } from 'react-geolocated';

function Banner() {
  const { position } = useGeolocated();
  console.log(position);

  const [selectedCity, setSelectedCity] = useState(null);
  const [closestCities, setClosestCities] = useState([]);

  const handleCardClick = (city) => {
    setSelectedCity(city);
  };

  function calculateDistance(latitude1, longitude1, latitude2, longitude2) {
    // Convert the latitudes and longitudes to radians.
    latitude1 = latitude1 * Math.PI / 180;
    longitude1 = longitude1 * Math.PI / 180;
    latitude2 = latitude2 * Math.PI / 180;
    longitude2 = longitude2 * Math.PI / 180;
  
    // Calculate the distance using the Haversine formula.
    const radius = 6371; // Earth's radius in kilometers.
    const distance = radius * Math.acos(Math.sin(latitude1) * Math.sin(latitude2) + Math.cos(latitude1) * Math.cos(latitude2) * Math.cos(longitude2 - longitude1));
  
    return distance;
  }

  const getClosestCities = () => {
    if (!position) {
      // If the user is not sharing their location, return the top 4 cities.
      return data.slice(0, 4);
    }

     // Calculate the distance between the user's location and each city.
     const distances = data.map((city) => {
      return {
        city,
        distance: calculateDistance(position, city),
      };
    });

    // Sort the cities by distance, ascending.
    distances.sort((a, b) => a.distance - b.distance);

    // Return the top 4 closest cities.
    return distances.slice(0, 4).map((distance) => distance.city);
  };

  useEffect(() => {
    setClosestCities(getClosestCities());
  }, [position]);

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
            {closestCities.map((city) => (
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