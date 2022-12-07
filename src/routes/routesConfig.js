import { NotFoundPage } from "../containers/App/NotFoundPage";
import { HomePage } from "../containers/HomePage/HomePage";
import { PeoplePageWE } from "../containers/PeoplePage/PeoplePage";
import { PersonPageWE } from "../components/PeoplePage/PeopleList/PersonPage";


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
    path: "/people/:id",
    element: <PersonPageWE />
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
