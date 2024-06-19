import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyListDetails = ({ item, setItmData, itmData }) => {
  const [myData, setMyData] = useState(itmData);
  console.log(item);
  console.log(myData);

  const { _id, image, short, country, tourist,  } = item;
  
  const handleRemove = (id) => {
    console.log("14", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myLists/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = myData?.filter((data) => data._id !== id);
            setItmData(remaining);
            console.log(data);
            Swal.fire("Deleted!", "Your Tour Spot has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl dark:bg-[#18181B] dark:text-white">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Country: {country} </h2>
        <h2 className="card-title">Tour Spot: {tourist} </h2>
        <p> {short} </p>
        <div className="card-actions">
          <button
            onClick={() => handleRemove(_id)}
            className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200"
          >
            Delete
          </button>
          <NavLink to={`/updateSpot/${_id}`}>
            <button className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
              Update
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyListDetails;