import { Outlet } from "react-router-dom";

import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SecondaryNavBar from "@/components/shared/SecondaryNavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <SecondaryNavBar />
      <main className="min-h-screen xl:mx-80 lg:max-70 md:mx-40 sm:mx-30 max-sm:mx-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
