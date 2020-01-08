import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { appReducer, IAppState } from "./App/App.reducer";
import { searchReducer, ISeachState } from "./Search/Search.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export interface IStateStore {
  app: IAppState;
  search: ISeachState;
}

const rootReducer = combineReducers({ app: appReducer, search: searchReducer });

export const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);

sagaMiddleware.run(rootSaga);
