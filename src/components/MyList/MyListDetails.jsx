import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyListDetails = ({ item, setItmData, itmData }) => {
  const [myData, setMyData] = useState(itmData);
  console.log(item);
  console.log(myData);

  const { _id, image, short, country,cost, seasonality, time, visitor, location, tourist, email } = item;
  
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
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Country:  {country} </h2>
        <h2 className="card-title">Tour Spot:  {tourist} </h2>
        <p> {short} </p>
        <div className="card-actions">
          <button onClick={() => handleRemove(_id)} className="btn btn-ghost btn-active">
            Delete 
          </button>
            <button className="btn btn-ghost btn-active">Update</button>
        </div>
      </div>
    </div>
  );
};

export default MyListDetails;