import React, { useEffect, useState } from "react";
import { data } from '../data/data'; // Import your city data
import BannerImage from './assets/airbnbBanner1.png';
import axios from "axios"; // Import axios here

function Banner() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [closestCities, setClosestCities] = useState([]);

  useEffect(() => {
    // Get the user's location using IP data.
    const getLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json');
        setCurrentLocation(response.data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    // Calculate the closest cities when the currentLocation changes.
    setClosestCities(getClosestCities());
  }, [currentLocation]);

  const handleCardClick = (city) => {
    setSelectedCity(city);
  };

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  const getClosestCities = () => {
    if (!currentLocation || Object.keys(currentLocation).length === 0) {
      // If the user's location is not available, return an empty array.
      return [];
    }

    // Calculate the distance between the user's location and each city.
    const distances = data.map((city) => {
      const distance = calculateDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        city.location.latitude,
        city.location.longitude
      );
      return {
        city,
        distance,
      };
    });

    // Sort the cities by distance, ascending.
    distances.sort((a, b) => a.distance - b.distance);

    // Return the top 4 closest cities.
    return distances.slice(0, 4).map((distance) => distance.city);
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
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
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
