import { useState } from 'react'
import './App.scss'
import './responsive.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './routes/layout/Layout';
import HomePage from './routes/home/HomePage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Event from './routes/event/Event';
import Events from './routes/event/Events';
import ForgetPassword from './routes/passreset/ForgetPassword';

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
          element: <Register/>,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/account/forgotpassword",
          element: <ForgetPassword />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
