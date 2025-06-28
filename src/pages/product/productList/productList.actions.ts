import * as types from "./productList.constants"

export const getProductListRequested = () => ({
  type: types.GET_PRODUCT_LIST_REQUESTED
})

export const getProductListSuccess = (payload:any) => {
  return {
    type: types.GET_PRODUCT_LIST_SUCCESS,
    payload
  }
}

export const getProductListFailed = (payload:any) => ({
  type: types.GET_PRODUCT_LIST_FAILED,
  payload
})
