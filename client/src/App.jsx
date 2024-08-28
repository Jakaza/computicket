import { useState } from 'react'
import './App.scss'
import './responsive.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './routes/layout/Layout';
import HomePage from './routes/home/HomePage';
import Login from './routes/login/Login';
import Event from './routes/event/Event';
import Events from './routes/event/Events';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:id",
          element: <Event />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <HomePage />,
        },
        {
          path: "/events",
          element: <Events />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
