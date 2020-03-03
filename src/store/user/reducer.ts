import { SET_USER } from "./consts";
import { IUserState, UserActionTypes } from "./types";

export const Reducer = (state: IUserState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, info: action.payload };
    default:
      return state;
  }
};
