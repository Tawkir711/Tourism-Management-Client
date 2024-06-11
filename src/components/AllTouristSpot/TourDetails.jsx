import React from 'react';
import { NavLink } from 'react-router-dom';

const TourDetails = ({ spot }) => {
  const { image, tourist, country, short, cost, time } = spot;
  console.log(spot);
  return (
    <div className="card lg:w-[600px] mx-auto m-6 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="grid gap-2">
          <div className="flex gap-12">
            <h1 className="text-lg font-semibold ">Spot Name: {tourist}</h1>
            <h1 className="text-lg font-semibold ">Location: {location}</h1>
          </div>
          <div className="flex gap-16">
            <div className="text-lg font-semibold">Travel Time: {time}</div>
            <div className="text-lg font-semibold">Cost: ${cost}</div>
          </div>
          {/* <div className="flex gap-12">
            <div className="text-lg font-semibold">
              Year Visitor: {visitor} man
            </div>
            <div className="text-lg font-semibold">
              Seasonality: {seasonality}
            </div>
          </div> */}
        </div>
        <div className="card-actions gap-10 pt-4">
          <NavLink to={"/"}>
            <button className="btn btn-ghost btn-active">Back Home</button>
          </NavLink>
          {/* <button onClick={mm} className="btn btn-ghost btn-active">
            My List
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;