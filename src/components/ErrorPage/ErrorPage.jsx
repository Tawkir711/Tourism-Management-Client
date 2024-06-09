import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl pt-5 font-semibold text-red-500">
        404
        <br />
       !!...Page is not Found ...!!
      </h2>
      <Link to={"/"}>
        <button className="btn btn-secondary mt-5">Go back Home</button>
      </Link>
      <img
        className=" mx-auto pt-5"
        src="https://i.postimg.cc/gcCHxwkN/404-error-page.gif"
        alt="404 gif"
      />
    </div>
  );
};

export default ErrorPage;
