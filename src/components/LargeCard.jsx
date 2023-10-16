import React from "react";
import Card from "./assets/airbnbBanner2.png"

export default function LargeCard () {
    return(
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <img src={Card} alt="travel" className="rounded-2xl"/>
            </div>

            <div className="absolute top-32 left-12 text-white">
                <h3 className="text-4xl mb3 w-64">The Great Outdoors</h3>
                <p>Wishlist curated by Airbnb</p>
            
                <button className="text-sm text-black font-semibold bg-gray-200 px-4 py-2 rounded-lg mt-5">Get Inspired</button>
            </div>

        </section>
    )
}