import { loginApi } from "../../apis/user.api"
import * as actions from "./login.actions"

export const login = (payload: ReqLogin) => (dispatch:any) => {
  dispatch(actions.loginRequested())
  return loginApi(payload)
    .then(res => {
      localStorage.setItem("token", res.data.access_token)
      return dispatch(actions.loginSuccess(res))
    })
    .catch(err => Promise.reject(dispatch(actions.loginFailed(err))))
}
