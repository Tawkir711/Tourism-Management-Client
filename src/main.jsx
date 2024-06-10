import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from './components/Context/Context.jsx';
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AddSpot from './components/AddSpot/AddSpot.jsx';
import UpdateSpot from './components/UpdateSpot/UpdateSpot.jsx';
import SpotDetails from './components/Spot/SpotDetails.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spot"),
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
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>,
      },
      {
        path: "/updateSpot",
        element: <UpdateSpot></UpdateSpot>,
      },
      {
        path: "/spotDetails/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
       <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
