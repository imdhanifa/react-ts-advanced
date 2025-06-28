import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import { createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "../pages/login/login.routes";
import { homeRoutes } from "../pages/home/home.routes";
import { productListRoutes } from "../pages/product/productList/productList.routes";
import { productItemRoutes } from "../pages/product/productItem/productItem.routes";
import { notFoundRoutes } from "../pages/notFound/notFound.routes";
import { MainLayout } from "../layouts/index";

export const appRouter = createBrowserRouter([
  ...loginRoutes,
  {
    path: "/",
    element: <AuthenticatedGuard />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [...homeRoutes, ...productListRoutes, ...productItemRoutes]
      }
    ]
  },
  ...notFoundRoutes,
]);
