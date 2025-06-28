import { Outlet } from "react-router-dom";

import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import SecondaryNavBar from "@/components/shared/SecondaryNavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <SecondaryNavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
