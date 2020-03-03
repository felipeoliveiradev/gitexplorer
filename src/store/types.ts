import { IAddListItemActions, IAddListItemState } from "./addListItem/types";
import { ILoadingActions, ILoadingState } from "./loading/types";
import { IRegisterAction, IRegisterState } from "./register/types";
import { ISideModalAction, ISideModalState } from "./sideModal/types";
import { IUserActions, IUserState } from "./user/types";
// import
export interface IStoreContent {
  actions: IActions;
  state: IStates;
}

export interface IStates {
  addListItem: IAddListItemState;
  sideModal: ISideModalState;
  register: IRegisterState;
  loading: ILoadingState;
  user: IUserState;
  // state
}

export interface IActions {
  addListItemAction: IAddListItemActions;
  sideModalAction: ISideModalAction;
  registerAction: IRegisterAction;
   loadingAction: ILoadingActions;
   userAction: IUserActions;
  // action
}

export type IStore = () => IStoreContent;
