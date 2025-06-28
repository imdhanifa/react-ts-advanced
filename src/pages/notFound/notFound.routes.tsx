import { NotFound } from "./index";

export const notFoundRoutes = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  }
];
