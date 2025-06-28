import { PATH } from "../../constants/paths"
import { Home } from "./index"

export const homeRoutes = [
  {
    path: PATH.HOME,
    element: <Home />
  },
  {
    path: `sub-${PATH.HOME}`,
    element: <Home />
  },
]
