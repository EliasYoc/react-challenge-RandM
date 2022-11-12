import { Outlet } from "react-router-dom";
import Favorites from "./Favorites";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Favorites />
    </>
  );
};

export default Layout;
