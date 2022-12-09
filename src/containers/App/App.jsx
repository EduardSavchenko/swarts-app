import { Route, Routes } from "react-router-dom";
import { routesConfig } from "../../routes/routesConfig";
import { MainLayout } from "./MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routesConfig.map((el, index) => (
          <Route key={index} path={el.path} element={el.element} />
        ))}
      </Route>
    </Routes>
  );
};

export { App };
