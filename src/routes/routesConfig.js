import { NotFoundPage } from "../containers/App/NotFoundPage";
import { HomePage } from "../containers/HomePage/HomePage";
import { PeoplePageWE } from "../containers/PeoplePage/PeoplePage";
import { PersonPageWE } from "../components/PeoplePage/PeopleList/PersonPage";
import { PeoplePageWithInfinity } from "../containers/PeoplePage/PeoplePageWithInfinity";
import { FilterCharByFilm } from "../containers/PeoplePage/FilterCharByFilm";
import { FavoriteItemPage } from "../components/PeoplePage/PeopleList/FavoriteItemPage";

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
    path: "/people-infinity",
    element: <PeoplePageWithInfinity />
  },
  {
    path: "/filter-char-by-film/",
    element: <FilterCharByFilm />
  },
  {
    path: "/favorite-page/",
    element: <FavoriteItemPage />
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
