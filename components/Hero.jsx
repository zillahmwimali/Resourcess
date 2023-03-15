// import Image from "next/image";
import React from "react";
import { SearchIcon, CalendarIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon, LocationMarkerIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/Home.module.css"

export default function Hero() {

  return (

          <Carousel

          className="text-left"
renderArrowPrev={(clickHandler, hasPrev) => {
return (
<div
  className={`${hasPrev ? "absolute" : "hidden"
    } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-full hover:opacity-100 cursor-pointer z-20`}
  onClick={clickHandler}
>
  <ChevronLeftIcon className="w-12 h-12 text-blue" />
</div>
);
}}

renderArrowNext={(clickHandler, hasNext) => {
return (
<div
  className={`${hasNext ? "absolute" : "hidden"
    } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-full hover:opacity-100 cursor-pointer z-20`}
  onClick={clickHandler}
>
  <ChevronRightIcon className="w-12 h-12 text-blue" />
</div>
);
}}
>
<Slide />


</Carousel>

  )
}

function Slide() {


  return (


    <section class="relative bg-white py-16 lg:pt-[100px] text-left">

    <div class=" mx-auto max-w-7xl px-8 md:px-6">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-5/12">
                <h1 class="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">Sleek Superbike Series</h1>
                
                <div class="flex flex-col justify-between mt-4">

            <ul>
              <li>
                <a class="flex items-center px-4 py-2 text-gray-900 " href="#">
                  <CalendarIcon class="w-6 h-6" />

                  <span class="mx-4 font-medium">Sun, Nov 6th 2022</span>
                </a>
              </li>

              <li>
                <a class="flex items-center px-4 py-2 mt-5 text-gray-900 " href="#">
                <ClockIcon class="w-6 h-6" />


                  <span class="mx-4 font-medium">9:00AM - 4:00PM </span>
                </a>
              </li>
              <li>
                <a class="flex items-center px-4 py-2 mt-5 text-gray-900 " href="#">
                  <LocationMarkerIcon class="w-6 h-6" />

                  <span class="mx-4 font-medium">Whistling Moran </span>
                </a>
              </li>
            </ul>

          
        </div>
                <p class="text-slate-500 mb-8 max-w-[480px] text-base">East Africa's largest motorcycle event of the year is here! The fastest racers in the country will battle it out at the Whistling Moran Circuit, Athi River on the 6th of November 2022!

                      Come watch these extraordinary machines and riders in their element, as they fight for the podium places!
                </p>
                
                <button class="w-full rounded-full px-8 py-2.5 bg-yellow font-semibold text-white shadow-md shadow-blue-500/20 hover:shadow-blue duration-200 sm:w-auto">Get Ticket</button>

                <button class="mt-4 box-border w-full rounded-full border border-blue text-blue px-8 py-2.5 font-semibold text-blue-500 shadow-md shadow-blue-500/10 duration-200 sm:ml-4 sm:mt-0 sm:w-auto ">View Details</button>

                
            </div>

            <div class="hidden px-4 lg:block lg:w-1/12"></div>

            <div class="w-full px-4 lg:w-6/12">
                <div class="lg:ml-auto lg:text-right">
                    <div class="relative z-10 inline-block pt-11 lg:pt-0 ">
                        <img src="https://pbs.twimg.com/media/Fey_Si8WIAAAG7J.jpg" class="max-w-full  rounded-md lg:ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  











  );
}




