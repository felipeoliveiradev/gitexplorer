import { useReducer } from "react";
import { SET_USER } from "./consts";
import { Reducer } from "./reducer";
import {
  IUserActions,
  IUserState,
  IUserStore
} from "./types";

export const defaultState: IUserState = {
  info: {}
};

export const defaultActions: IUserActions = {
  setInfo: (info: string[]) => { }
};

export const UserStore = (
  initialState = defaultState
): IUserStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setInfo = (info: string[]) => {
    dispatch({
      payload: info,
      type: SET_USER
    });
  };

  return {
    actions: {
      setInfo
    },
    state
  };
};
