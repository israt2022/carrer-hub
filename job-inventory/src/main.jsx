import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import JobDetails from './components/JobDetails';
import AllJobs from './components/AllJobs';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "statistics",
        element: <Statistics/>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "/job/:jobID",
        element: <JobDetails/>,
      },
      {
        path: "/all-jobs",
        element: <AllJobs/>,
      },
      {
        path: "*",
        element: <Error404/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
