import React from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'; // Import the format function from date-fns


export default function Search(){
   
    // Get the current location and query parameters
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Deconstruct the values from the query parameters
    const locationParam = searchParams.get("location") || "";
    const startDateParam = searchParams.get("startDate") || "";
    const endDateParam = searchParams.get("endDate") || "";
    const noOfGuestsParam = searchParams.get("noOfGuests") || "";

      // Format the dates using the format function
  const formattedStartDate = startDateParam ? format(new Date(startDateParam), "dd MMMM yy") : "";
  const formattedEndDate = endDateParam ? format(new Date(endDateParam), "dd MMMM yy") : "";
  const range = formattedStartDate && formattedEndDate ? `${formattedStartDate} - ${formattedEndDate}` : "";
    return(
        <div>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays {range} for {noOfGuestsParam} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {locationParam}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Cancellation Flexibility</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Type of Place</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Price</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Rooms and Beds</p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">More Filters</p>
                    </div>

                </section>
            </main>
        </div>
    )
}