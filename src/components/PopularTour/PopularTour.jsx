// client/src/components/PopularTours.js
import React from "react";

const popularTours = [
  {
    image: "https://i.postimg.cc/DzNvP4ZM/city-2178705-640.jpg",
    name: "Bangkok City Tour",
    description:
      "Explore the vibrant city of Bangkok with our guided city tour.",
    price: "$100",
  },
  {
    image: "https://i.postimg.cc/2yRCPpnd/sunset-5299957-640.jpg",
    name: "Phuket Beach Getaway",
    description:
      "Relax on the beautiful beaches of Phuket with our exclusive beach package.",
    price: "$150",
  },
  {
    image: "https://i.postimg.cc/XJMMvfX4/cliff-1822484-640.jpg",
    name: "Chiang Mai Adventure",
    description: "Discover the cultural and natural wonders of Chiang Mai.",
    price: "$200",
  },
];

const PopularTour = () => {
  return (
    <section className="popular-tours pt-16 pb-10">
      <h2 className="text-center pb-6 text-5xl ">Popular Tours</h2>
      <div className="tours-container flex justify-center gap-12">
      {popularTours.map((tour, index) => (
        <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
          <img
            width={200}
            height={200}
            className="h-[275px] w-[350px] rounded-lg object-cover"
            src={tour.image}
            alt={tour.name}
          />
          <div className="grid gap-2">
            <h3>{tour.name}</h3>
            <p className="text-sm text-gray-500 dark:text-white/60">
              {tour.description}
            </p>
            <div className="text-lg font-semibold">
              <p className="tour-price">{tour.price}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="book-now rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
              Book Now
            </button>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default PopularTour;
