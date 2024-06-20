import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "./components/Context/Context.jsx";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import AddSpot from "./components/AddSpot/AddSpot.jsx";
import UpdateSpot from "./components/UpdateSpot/UpdateSpot.jsx";
import SpotDetails from "./components/Spot/SpotDetails.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import MyList from "./components/MyList/MyList.jsx";
import AllTouristSpot from "./components/AllTouristSpot/AllTouristSpot.jsx";
import ThemeProvider from "./components/ThemeContext/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spotSort"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addSpot",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/myLists"),
      },
      {
        path: "/updateSpot/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myLists/${params.id}`),
      },
      {
        path: "/spotDetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spot/${params.id}`),
      },
      {
        path: "/allTourSpot",
        element: <AllTouristSpot></AllTouristSpot>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </ThemeProvider>
  </React.StrictMode>
);
