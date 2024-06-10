import React from 'react';

const SpotCard = ({ spot }) => {
  const { image, tourist, country, short, cost,  time, } = spot;
  return (
    <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
      <img
        width={200}
        height={200}
        className="h-[275px] w-[350px] rounded-lg object-cover"
        src={image}
        alt="card"
      />
      <div className="grid gap-2">
        <h1 className="text-lg font-semibold ">Country: {country}</h1>
        <p className="text-sm text-gray-500 dark:text-white/60">{short}</p>
        <h1 className="text-lg font-semibold ">Spot Name: {tourist}</h1>
        <div className="flex justify-between">
          <div className="text-lg font-semibold">Travel Time: {time}</div>
          <div className="text-lg font-semibold">Cost: ${cost}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SpotCard;