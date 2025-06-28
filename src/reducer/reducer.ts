import { combineReducers } from "redux"
import { AppReducer } from "../app/app.reducer"
import { loginReducer } from "../pages/login/login.reducer"
import { ProductListReducer } from "../pages/product/productList/productList.reducer"
import { productItemReducer } from "../pages/product/productItem/productItem.reducer"

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: ProductListReducer,
  productItem: productItemReducer
})

export default rootReducer
