import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Header from "../components/Header";
import { data2 } from "../data/data2";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid"
import axios from "axios";
// import Map from '../components/Map'

export default function Search({ searchResults }) {
  const [closestResults, setClosestResults] = useState([]);

      // Get the current location and query parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

      // Deconstruct the values from the query parameters
  const locationParam = searchParams.get("location") || "";
  const startDateParam = searchParams.get("startDate") || "";
  const endDateParam = searchParams.get("endDate") || "";
  const noOfGuestsParam = searchParams.get("noOfGuests") || "";

        // Format the dates using the format function
  const formattedStartDate = startDateParam
    ? format(new Date(startDateParam), "dd MMMM yy")
    : "";
  const formattedEndDate = endDateParam
    ? format(new Date(endDateParam), "dd MMMM yy")
    : "";
  const range =
    formattedStartDate && formattedEndDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : "";

  useEffect(() => {
    if (locationParam) {
      // Calculate distances and sort by distance
      const sortedResults = data2
        .map((result) => {
          const lat1 = parseFloat(result.lat);
          const lon1 = parseFloat(result.long);
          const lat2 = parseFloat(locationParam.split(",")[0]); // Extract latitude from the locationParam
          const lon2 = parseFloat(locationParam.split(",")[1]); // Extract longitude from the locationParam

          // Calculate distance using Haversine formula
          const R = 6371; // Radius of the Earth in kilometers
          const dLat = ((lat2 - lat1) * Math.PI) / 180;
          const dLon = ((lon2 - lon1) * Math.PI) / 180;
          const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
              Math.cos((lat2 * Math.PI) / 180) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          const distance = R * c;

          return { ...result, distance };
        })
        .sort((a, b) => a.distance - b.distance);

      // Take the closest 5 results
      const closestResults = sortedResults.slice(0, 5);
      setClosestResults(closestResults);
    }
  }, [locationParam]);

  return (
    <div>
      <Header
        placeholder={`${locationParam} | ${range} | ${noOfGuestsParam} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} for {noOfGuestsParam} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6 border-b pb-2"> Stays in {locationParam}</h1>

          {/* Render the closest 5 results */}
          {closestResults.map((result, index) => (
            <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition-duration-200 ease-out">
                <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 first:border-t" key={index}>
                <img className="rounded-2xl max-h-56" layout="fill" objectFit="cover" src={result.img} />
                </div>

                <div className="flex flex-col flex-grow pl-5">

                    <div className="flex justify-between pt-2">
                    <p className="pt-2 text-sm text-gray-500 flex-grow">{result.location}</p>

                         <HeartIcon className="h-7 cursor-pointer"/>
                    </div>

                    <h4 className="text-xl">{result.title}</h4>

                    <div className="border-b w-10 pt-2" />

                        <p className="pt-2 text-sm text-gray-500 flex-grow">{result.description}</p>


                    <div className="flex justify-between items-end pt-5">
                       <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400"/>
                        {result.star}
                        </p> 

                        <div>

                        <p className="text-lg lg:text-2xl font-semibold pb-2">Price: {result.price}</p>
                        <p className="text-right font-light">Total: {result.total}</p>


                            <p>

                            </p>

                        </div>
                    </div>
                </div>
            </div>
          ))}

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* Add filter options */}
          </div>
        </section>

        <section className=" ">
            {/* <Map /> */}
        </section>

      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
