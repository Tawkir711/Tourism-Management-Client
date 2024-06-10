import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spotUpdate = useLoaderData();
  const {
    _id,
    image,
    tourist,
    country,
    location,
    short,
    cost,
    seasonality,
    time,
    visitor,
    email,
    name,
  } = spotUpdate;

  const handleUpdateSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const tourist = form.tourist.value;
    const country = form.country.value;
    const location = form.location.value;
    const short = form.short.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const email = form.email.value;
    const name = form.name.value;

    const updateSpot = {
      name,
      image,
      tourist,
      country,
      location,
      short,
      cost,
      seasonality,
      visitor,
      time,
      email,
    };
    console.log(updateSpot);

    // send data to server side
    fetch(`http://localhost:5000/myLists/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: " Tour Spot Updated successfully",
          });
        }
      });
  };

  return (
    <div className="bg-[#dddddb] p-4 lg:p-10 my-7">
      <Helmet>
        <title>Tourism Management / Update Spot</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">Update Tour Spot</h2>
      <form onSubmit={handleUpdateSpot}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="use image URL"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="tourist"
                defaultValue={tourist}
                placeholder="tourists spot name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="country"
                defaultValue={country}
                placeholder="country name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="location"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="short"
                defaultValue={short}
                placeholder="short description"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="cost"
                defaultValue={cost}
                placeholder="average cost"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seasonality"
                defaultValue={seasonality}
                placeholder="seasonality"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                defaultValue={time}
                placeholder="travel time"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="visitor"
                defaultValue={visitor}
                placeholder="total visitors per year"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="user email"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="user name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Update Spot" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateSpot;
