import { Outlet } from "react-router";
import { MainMenu } from "./MainMenu";

const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
};

export { MainLayout };
