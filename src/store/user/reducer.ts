import { SET_USER } from "./consts";
import { UserActionTypes, IUserState } from "./types";

export const Reducer = (state: IUserState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, info: action.payload };
    default:
      return state;
  }
};
