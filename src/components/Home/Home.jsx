import React from "react";
import { Helmet } from "react-helmet";
import PopularTour from "../PopularTour/PopularTour";
import Banner from "./Banner";
import SpotCard from "../Spot/SpotCard";
import { useLoaderData } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  const spots = useLoaderData();
  console.log(spots, "6");
  return (
    <>
      <Helmet>
        <title>Tourism Management / Home</title>
      </Helmet>
      <Banner></Banner>
      <h2 className="text-4xl font-semibold text-center mt-8">Tourists Spots Section </h2>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {spots?.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
      <PopularTour></PopularTour>
      <AboutUs></AboutUs>
    </>
  );
};
export default Home;
