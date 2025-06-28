import * as actions from "./productList.actions"
import { getProductListApi } from "../../../apis/product.api"

export const getProductList = () => (dispatch:any) => {
  dispatch(actions.getProductListRequested())
  return getProductListApi()
    .then(res => dispatch(actions.getProductListSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getProductListFailed(err))))
}
