import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import ProductPage from "../pages/Products/ProductsPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/productDetails/ProductDetails";
import BookingPage from "../pages/bookings/booking";
import Mybookings from "../pages/bookings/mybookings";
import CartPage from "../pages/CartPage/Cartpage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import Auth from "../pages/Auth/Auth";

import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Vehicles from "../pages/Dashboard/Vehicles";
import Bookings from "../pages/Dashboard/Bookings";
import BookingDetails from "../pages/Dashboard/BookingDetailPage";
import Customer from "../pages/Dashboard/Customer";
import CustomerDetails from "../pages/Dashboard/CustomerDetails";
import Payments from "../pages/Dashboard/Payments";
import Reviews from "../pages/Dashboard/Reviews";
import Analytics from "../pages/Dashboard/Analytics";
import Settings from "../pages/Dashboard/Settings";

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
      { path: "booking/:vehicleId", element: <BookingPage /> },
      { path: "mybookings", element: <Mybookings /> },
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
  // Admin dashboard routes
  // Protected dashboard routes
  {
    element: <ProtectedRoute />,
    children: [
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
        path: "/dashboard/bookings/:bookingId",
        element: <BookingDetails />,
      },
      {
        path: "/dashboard/customers",
        element: <Customer />,
      },
      {
        path: "/dashboard/customers/:id",
        element: <CustomerDetails />,
      },
      {
        path: "/dashboard/payments",
        element: <Payments />,
      },
      {
        path: "/dashboard/reviews",
        element: <Reviews />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
    ],
  },
]);
