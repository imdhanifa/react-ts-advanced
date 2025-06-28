import * as actions from "./productItem.actions"
import { getProductItemApi } from "../../../apis/product.api"

export const getProductItem = (id: string) => (dispatch :any) => {
  dispatch(actions.getProductItemRequested())
  return getProductItemApi(id)
    .then(res => dispatch(actions.getProductItemSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getProductItemFailed(err))))
}
