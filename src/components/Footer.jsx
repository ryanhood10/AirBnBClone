import React from "react";

export default function Footer () {

    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800">
            <div className="space-y-4 text-xs">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Community Forums</p>
                <p>Newsletter</p>
                <p>Articles</p>
                <p>Chat with us</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Airbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Hosting resources</p>
                <p>Community forum</p>
                <p>Hosting responsibility</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Common Q&A</p>
                <p>Trust & Safety</p>
                <p>Our Agreements</p>
                <p>Jobs with us</p>
            </div>


           
        </div>
    )
}