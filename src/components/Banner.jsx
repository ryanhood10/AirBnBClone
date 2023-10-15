import React from "react";
import BannerImage from './assets/airbnbBanner1.png'

function Banner () {

    return(
<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
    <img src={BannerImage} alt="banner"
            layout="fill"
            objectFit="cover"
            className="" />
    
    <div className="absolute top-1/4 w-full text-center">
        <p className="font-bold text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 
        hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
    </div>

</div>

    )

}

export default Banner;
