import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/components/shared/ErrorPage";

const Home = lazy(() => import("@/pages/Home/Home"));
const About = lazy(() => import("@/pages/About/About"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const NotFound = lazy(() => import("@/pages/404/NotFound"));
const Destinations = lazy(() => import("@/pages/Destinations/Destinations"));
const GetStarted = lazy(() => import("@/pages/GetStarted/GetStarted"));
const Clients = lazy(() => import("@/pages/CLients/CLients"));
const Payments = lazy(() => import("@/pages/Payments/Payments"));
const Blogs = lazy(() => import("@/pages/Blogs/Blogs"));
const Services = lazy(() => import("@/pages/Services/Services"));
const TourInit = lazy(() => import("@/pages/Tour-Init/TourInit"));
const HireVehicles = lazy(() => import("@/pages/Hire-Vehicles/HireVehicles"));
const AirportTransfer = lazy(() =>
  import("@/pages/AirportTransfer/AirportTransfer")
);
const RentWithDriver = lazy(() =>
  import("@/pages/RentWithDriver/RentWithDriver")
);
const SelfDrive = lazy(() => import("@/pages/SelfDrive/SelfDrive"));
const SpecialOffers = lazy(() => import("@/pages/SpecialOffers/SpecialOffers"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <NotFound /> },
      { index: true, element: <Home /> },
      { path: "clients", element: <Clients /> },
      { path: "payments", element: <Payments /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "tour-itineraries", element: <TourInit /> },
      { path: "hire-vehicles", element: <HireVehicles /> },
      { path: "airport-transfer", element: <AirportTransfer /> },
      { path: "with-driver", element: <RentWithDriver /> },
      { path: "self-drive", element: <SelfDrive /> },
      { path: "special-offers", element: <SpecialOffers /> },

      { path: "destinations", element: <Destinations /> },
      { path: "get-started", element: <GetStarted /> },
    ],
  },
]);
