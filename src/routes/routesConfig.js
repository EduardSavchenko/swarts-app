import { NotFoundPage } from "../containers/App/NotFoundPage";
import { HomePage } from "../containers/HomePage/HomePage";
import { PeoplePageWE } from "../containers/PeoplePage/PeoplePage";


const routesConfig = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/people",
    element: <PeoplePageWE />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/not-found",
    element: <NotFoundPage />
  },
];
export { routesConfig };
