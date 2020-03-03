import React, { createContext } from "react";
import { defaultActions as loadingDefaultActions, defaultState as loadingDefaultState } from "store/loading/action";
import { Store } from "./store";
import { defaultActions as addListDefautlActions, defaultState as addListDefautlState } from "./store/addListItem/action";
import { defaultActions as registerDefaultActions, defaultState as registerDefaultstate } from "./store/register/action";
import { defaultActions as addSideModalDefaultActions, defaultState as addSideModalDefaultState } from "./store/sideModal/action";
import { defaultActions as userDefaultActions, defaultState as userDefaultState } from "store/user/action";
// import

import { IStore, IStoreContent } from "./store/types";

interface IProviderProps {
  children: JSX.Element;
}

const ContextStore = (useValue: IStore) => {
  const Context = createContext<IStoreContent>({
    state: {
      addListItem: addListDefautlState,
      register: registerDefaultstate,
      sideModal: addSideModalDefaultState,
      loading: loadingDefaultState,
      user: userDefaultState,
      // state
    },
    // tslint:disable-next-line: object-literal-sort-keys
    actions: {
      addListItemAction: addListDefautlActions,
      registerAction: registerDefaultActions,
      sideModalAction: addSideModalDefaultActions,
      loadingAction: loadingDefaultActions,
      userAction: userDefaultActions,
      // actions
    }
  });

  const Provider = (props: IProviderProps) => {
    const value = useValue();
    const { children } = props;
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    Context,
    Provider
  };
};

export const AppContext = ContextStore(Store);
