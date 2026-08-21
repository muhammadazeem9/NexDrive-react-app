import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import ProductPage from "../pages/Products/ProductsPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/productDetails/ProductDetails";
import CartPage from "../pages/CartPage/Cartpage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import Auth from "../pages/Auth/Auth";
import Dashboard from "../pages/Dashboard/Dashboard";
import Vehicles from "../pages/Dashboard/Vehicles";
import Bookings from "../pages/Dashboard/Bookings";
import BookingDetails from "../pages/Dashboard/BookingDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/vehicles",
    element: <Vehicles />,
  },
  {
    path: "/dashboard/bookings",
    element: <Bookings />,
  },
  {
    path: "dashboard/bookings/:bookingId",
    element: <BookingDetails />,
  },
]);
