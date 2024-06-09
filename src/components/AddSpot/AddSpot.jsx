import { data } from "autoprefixer";
import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddSpot = () => {
  const handleAddSpot = (event) => {
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
    const tourPlace = {
      image, tourist, country, location, short, cost, seasonality,time, visitor, email, name
    };
    console.log(tourPlace);

    fetch("http://localhost:5000/spot", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tourPlace)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "User Added Successfully",
          });
        }
    })
    
  };
  return (
    <div className="bg-[#dddddb] p-4 lg:p-10 my-7">
      <Helmet>
        <title>Tourism Management / Add Spot</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">Add Tour Spot</h2>
      <form onSubmit={handleAddSpot}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
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
                placeholder="tourists spot name"
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
                placeholder="location"
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
                placeholder="average cost"
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
                placeholder="travel time"
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
                placeholder="user email"
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
                placeholder="user name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
        <input type="submit" value="Add Spot" className="btn btn-block" />
      </form>
    </div>

  );
};

export default AddSpot;
