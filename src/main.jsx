import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About/About.jsx";
import Cards from "./Components/Cards.jsx";
import BannerSection from "./Components/BannerSection.jsx";
import FoodItems from "./Components/FoodItems.jsx";
import Chiefs from "./Components/About/Chiefs.jsx";
import Cheifbooks from "./Components/About/Cheifbooks.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
        children: [
          {
            path: "/",
            element: <Cards />,
            children: [
              {
                path: "/",
                element: <BannerSection />,
                children: [{ path: "/", element: <FoodItems /> }],
              },
            ],
          },
          ,
        ],
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about",
            element: <Chiefs />,
            children: [{ path: "", element: <Cheifbooks /> }],
          },
        ],
      },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
