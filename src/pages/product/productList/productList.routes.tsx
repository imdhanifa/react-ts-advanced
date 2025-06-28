import { PATH } from "../../../constants/paths"


export const productListRoutes = [
  {
    path: PATH.PRODUCT,
    lazy: async () => {
      return {
        Component: (await import("./productList")).default,
      }
    },
  },
  {
    path: `sub-${PATH.PRODUCT}`,
    lazy: async () => {
      return {
        Component: (await import("./productList")).default,
      }
    },
  }
]
