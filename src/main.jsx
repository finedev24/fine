import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RegFormProvider from "./providers/RegFormProvider.jsx";

import Layout from "./containers/Layout.jsx";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Address from "./components/Address";
import VehicleType from "./components/VehicleType";
import SelectService from "./components/SelectService";
import Addons from "./components/Addons.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/address", element: <Address /> },
      { path: "/vehicle", element: <VehicleType /> },
      { path: "/services", element: <SelectService /> },
      { path: "/addons", element: <Addons /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
