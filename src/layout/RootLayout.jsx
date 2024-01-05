import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
