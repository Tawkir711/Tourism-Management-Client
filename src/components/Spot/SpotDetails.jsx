import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import axios from "axios";
import Swal from "sweetalert2";

const SpotDetails = () => {
  const { user } = useContext(AuthContext);
  const spot = useLoaderData();
  const { image, tourist, country, short, cost, seasonality, time, visitor,location, name } = spot;

  const listData = {
    image,
    tourist,
    country,
    short,
    location,
    cost,
    seasonality,
    time,
    visitor,
    name,
    email: user.email,
  };

  const handleMyList = () => {
    axios?.post("http://localhost:5000/myLists", listData)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: " Add To My List",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Already Added",
        });
      });
  };


  return (
    <div className="card lg:w-[600px] mx-auto m-6 bg-base-100 shadow-xl dark:bg-[#18181B] dark:text-white">
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
          <div className="flex gap-12">
            <h1 className="text-lg font-semibold ">Spot Name: {tourist}</h1>
            <h1 className="text-lg font-semibold ">Location: {location}</h1>
          </div>
          <div className="flex gap-16">
            <div className="text-lg font-semibold">Travel Time: {time}</div>
            <div className="text-lg font-semibold">Cost: ${cost}</div>
          </div>
          <div className="flex gap-12">
            <div className="text-lg font-semibold">
              Year Visitor: {visitor} man
            </div>
            <div className="text-lg font-semibold">
              Seasonality: {seasonality}
            </div>
          </div>
        </div>
        <div className="card-actions gap-10 pt-4">
          <NavLink to={"/"}>
            <button className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200btn-ghost btn-active ">
              Back Home
            </button>
          </NavLink>
          <button
            onClick={handleMyList}
            className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200 "
          >
            My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
