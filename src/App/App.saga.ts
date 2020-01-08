import { takeLatest } from "redux-saga/effects";
import { AppActions } from "./App.actions";

function* intializeApplicationData(action: any) {
  yield fetch(`http://www.google.com`, {
    method: "GET"
  }).then(response => response.json());
}

export function* appSaga() {
  yield takeLatest(AppActions.INIT_APP_DATA, intializeApplicationData);
}
