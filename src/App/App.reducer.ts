import { AppActions } from "./App.actions";
import { Record } from "immutable";

export interface ITransaction {
  timestamp: string;
  toAddress: string;
  fromAddress: string;
  amount: string;
  balance: number; // This is added during preprosessing for visualization
}

export interface IAppState {
  appInitialized: boolean;
}

const appStateInitialRecord = Record<IAppState>({
  appInitialized: false
});

export function appReducer(
  state = appStateInitialRecord(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case AppActions.INIT_APP_DATA:
      return state.set("appInitialized", true);
    default:
      return state;
  }
}
