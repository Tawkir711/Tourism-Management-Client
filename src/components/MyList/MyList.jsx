import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from '../Context/Context';
import MyListDetails from './MyListDetails';

const MyList = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();
  console.log(items);
  const [itmData, setItmData] = useState(items);
  console.log("9wis", itmData);
  const url = `http://localhost:5000/myLists?email=${user.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setItmData(data));
  }, []);
  return (
    <div className="my-4 bg-base-100">
      <Helmet>
        <title>Tourism Management / My List</title>
      </Helmet>
      <div className="text-center">
        <h3 className="text-2xl font-semibold">My List</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 my-6 ">
        {itmData?.length > 0 ? (
          itmData.map((item) => (
            <MyListDetails
              item={item}
              key={item._id}
              setItmData={setItmData}
              itmData={itmData}
            ></MyListDetails>
          ))
        ) : (
          <div className="text-3xl font-bold text-center   my-10">
            <p>Wishlist is Empty </p>
            <img
              src="https://i.postimg.cc/VvySJCTF/d9f21515b1e38d83e94fdbce88f623b6.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;