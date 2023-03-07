import "./app.css";
import React from "react";
import Logo from "./components/logo/Logo";
import Login from "./components/login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Links from "./components/home/Links/Links";
import ExtList from "./components/home/ExtList/ExtList";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App container">
        <Logo />
        <Login />
      </div>
    ),
  },
  {
    path: "/home",
    element:<Home />
  },
  {
    path: "/links",
    element:<Links />
  },
  {
    path: "/phone",
    element:<ExtList />
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;
