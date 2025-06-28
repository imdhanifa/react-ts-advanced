import * as types from "./app.constants";
import { LOGIN_SUCCESS } from "../pages/login/login.constants";
import { produce } from "immer";

// Define the state shape
interface AppState {
  isAuthenticated: boolean;
  closeSideNav: boolean;
}

// Define action shape
interface Action {
  type: string;
  payload?: any;
}

// Initial state
const initialState: AppState = {
  isAuthenticated: false,
  closeSideNav: false,
};

// Reducer with immer
export const AppReducer = (state = initialState, action: Action): AppState =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGOUT:
        localStorage.removeItem("token");
        draft.isAuthenticated = false;
        break;

      case LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        break;

      case types.CLOSE_SIDE_NAV:
        draft.closeSideNav = !draft.closeSideNav; // ✅ fix: use draft, not state
        break;

      default:
        // No changes – return draft as is
        break;
    }
  });
