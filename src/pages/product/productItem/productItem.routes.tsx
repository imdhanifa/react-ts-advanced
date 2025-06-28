import { lazy } from "react"
import { PATH } from "../../../constants/paths"

const ProductItem = lazy(() => import("./index").then(module => ({
  default: module.ProductItem
})))

export const productItemRoutes = [
  {
    path: `${PATH.PRODUCT}`,
    element: <ProductItem />
  },
  {
    path: `sub-${PATH.PRODUCT}/:idProduct`,
    element: <ProductItem />
  }
]
