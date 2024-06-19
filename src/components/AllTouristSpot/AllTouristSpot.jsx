import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import './tour.css';
const AllTouristSpot = () => {
  const [spots, setSpots] = useState([]);
  // const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:5000/allSpot")
      .then((res) => setSpots(res.data));
  }, []);
  console.log(spots);

  // const handleSort = (order) => {
  //   setSortOrder(order);
  //   const sortedData = [...spots].sort((a, b) => {
  //     return order === "asc" ? a.cost - b.cost : b.cost - a.cost;
  //   });
  //   setSpots(sortedData);
  // };

  return (
    <>
      {/* <div>
        <Helmet>
          <title>Tourism Management / All Tourist spot</title>
        </Helmet>
        <h3 className="text-2xl text-center py-5 font-semibold">
          All Tourist Spot
        </h3>
        <div>
          <label>Sort by Average Cost: </label>
          <select
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div> */}
      <div className="grid-container ">
        {spots.map((spot) => (
          <div
            key={spot.id}
            className="card mx-auto m-6 bg-base-100 shadow-xl dark:bg-[#18181B] dark:text-white"
          >
            <figure className="card-image">
              <img src={spot.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <div className="grid gap-2">
                <div>
                  <div className="text-lg font-semibold ">
                    Spot Name: {spot.tourist}
                  </div>
                  <div className="text-lg font-semibold ">
                    Location: {spot.location}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">
                    Year Visitor: {spot.visitor} man
                  </div>
                  <div className="text-lg font-semibold">
                    Seasonality: {spot.seasonality}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">
                    Travel Time: {spot.time}
                  </div>
                  <div className="text-lg font-semibold">
                    Average Cost: {spot.cost}
                  </div>
                </div>
              </div>
              <div className="card-actions gap-10 pt-4">
                <NavLink to={"/"}>
                  <button className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
                    Back Home
                  </button>
                </NavLink>
                <NavLink to={`/spotDetails/${spot._id}`}>
                  <button className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTouristSpot;
