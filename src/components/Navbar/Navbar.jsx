import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Sign me Out!",
        })
          .then((result) => {
            if (result.isConfirmed) {
              logOut().then();
              Swal.fire({
                title: "Sign Out!",
                text: "You have been signed out successfully.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There was an error signing you out.",
              "error"
            );
          });
  };
  const userImage =
    user && user.photoURL
      ? user.photoURL
      : "https://i.postimg.cc/zB10zYpJ/userImg.jpg";
  const userName = user && user.displayName;

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        {/* <NavLink to={"/register"}>Register</NavLink> */}
      </li>
    </>
  );
  return (
    <div className={`navbar bg-gray-300 `}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
            <div className="navbar-end md:hidden md:flex">
              <p>{userName}</p>
              <label className="btn btn-ghost btn-circle avatar  ">
                <div className="w-10 rounded-full">
                  <img src={userImage} alt="user img" />
                </div>
              </label>
              {user ? (
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn">Login</button>
                </Link>
              )}
            </div>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-xl font-semibold">Tourism Management</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <p>{userName}</p>
        <label className="btn btn-ghost btn-circle avatar  ">
          <div className="w-10 rounded-full">
            <img src={userImage} alt="user img" />
          </div>
        </label>
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
