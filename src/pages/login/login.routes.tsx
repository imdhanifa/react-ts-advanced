import { PATH } from "../../constants/paths"
import { Navigate } from "react-router-dom"


export const loginRoutes = [
  {
    path: PATH.LOGIN,
    lazy: async () => {
      const { default: Login } = await import("./login");
      return { Component: Login };
    }
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />
  }
]
