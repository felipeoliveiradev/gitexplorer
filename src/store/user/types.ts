import { SET_USER } from "./consts";

export interface IUserState {
  info: any;
}

interface IUserAction {
  payload: any;
  type: typeof SET_USER;
}

export interface IUserStore {
  state: IUserState;
  actions: IUserActions;
}

export interface IUserActions {
  setInfo(info: any): void;
}

export type UserActionTypes = IUserAction;
