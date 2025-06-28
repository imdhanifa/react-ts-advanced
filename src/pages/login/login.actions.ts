import * as types from "./login.constants"

export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED
})

export const loginSuccess = (payload :any) => ({
  type: types.LOGIN_SUCCESS,
  payload
})

export const loginFailed = (payload :any) => ({
  type: types.LOGIN_FAILED,
  payload
})
