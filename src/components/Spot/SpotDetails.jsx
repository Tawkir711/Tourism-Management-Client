import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    image,
    tourist,
    country,
    short,
    cost,
    seasonality,
    time,
    visitor
  } = spot;
  return (
    <div className="card lg:w-[600px] mx-auto m-6 bg-base-100 shadow-xl">
      <Helmet>
        <title>Tourism Management / Spot Details</title>
      </Helmet>
      <h1 className="text-center font-semibold text-3xl pt-3">Details Page</h1>
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Country: {country} </h2>
        <p>{short}</p>
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Spot Name: {tourist}</h1>
          <div className="flex gap-12">
            <div className="text-lg font-semibold">Travel Time: {time}</div>
            <div className="text-lg font-semibold">Cost: ${cost}</div>
          </div>
          <div className="flex gap-12">
            <div className="text-lg font-semibold">Year Visitor: {visitor} man</div>
            <div className="text-lg font-semibold">Seasonality: {seasonality}</div>
          </div>
        </div>
        <div className="card-actions gap-10 pt-4">
          <NavLink to={"/"}>
            <button className="btn btn-ghost btn-active">Back Home</button>
          </NavLink>
          <button className="btn btn-ghost btn-active">My List</button>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
