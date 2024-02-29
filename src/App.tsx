import {
  Outlet,
  createBrowserRouter,
  //redirect,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useState, useCallback } from "react";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const UnloginRouter = createBrowserRouter([
  {
    //loader: () => redirect("/"),
    element: (
      <>
        <MainNavigation />
        <main />
        <Outlet />
      </>
    ),
    children: [
      { index: true, path: "/", element: <Users /> },
      {
        path: "places/new",
        element: <NewPlace />,
      },
      { path: "/:userId/places", element: <UserPlaces /> },
      { path: "/auth", element: <Auth /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

const LoginRouter = createBrowserRouter([
  {
    //loader: () => redirect("/"),
    element: (
      <>
        <MainNavigation />
        <main />
        <Outlet />
      </>
    ),
    children: [
      { index: true, path: "/", element: <Users /> },
      {
        path: "places/new",
        element: <NewPlace />,
      },
      { path: "/:userId/places", element: <UserPlaces /> },
      { path: "places/:placeId", element: <UpdatePlace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = LoginRouter;
  } else {
    routes = UnloginRouter;
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  );
};
export default App;
