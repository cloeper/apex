import { appSaga } from "./App/App.saga";
import { searchSaga } from "./Search/Search.sagas";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([appSaga(), searchSaga()]);
}
