import * as types from "./login.constants"
import {produce} from "immer"

const initialState = {
  loading: false
}

export const loginReducer = (state = initialState, action:any) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGIN_REQUESTED:
        draft.loading = true
        break
      case types.LOGIN_SUCCESS:
        draft.loading = false
        break
      case types.LOGIN_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
