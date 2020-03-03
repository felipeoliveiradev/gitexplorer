import { AddListItemStore } from "./addListItem/action";
import { LoadingStore } from "./loading/action";
import { RegisterStore } from "./register/action";
import { SideModalStore } from "./sideModal/action";
// Import Store
import { IStore, IStoreContent } from "./types";
import { UserStore } from "./user/action";

export const Store: IStore = (): IStoreContent => {
  const addListItemStore = AddListItemStore();
  const sideModalStore = SideModalStore();
  const registerStore = RegisterStore();
  const loadingStore = LoadingStore();
  const userStore = UserStore();
  // import register
  return {
    actions: {
      addListItemAction: addListItemStore.actions,
      registerAction: registerStore.actions,
      sideModalAction: sideModalStore.actions,
      loadingAction: loadingStore.actions,
      userAction: userStore.actions
      // actions
    },
    state: {
      addListItem: addListItemStore.state,
      register: registerStore.state,
      sideModal: sideModalStore.state,
      loading: loadingStore.state,
      user: userStore.state
      // state
    }
  };
};
