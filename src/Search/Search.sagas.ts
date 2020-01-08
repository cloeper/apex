import { takeLatest, put } from "redux-saga/effects";
import { SearchActions, searchActions } from "./Search.actions";
import { IImage } from "./Search.reducer";

function* searchImages(action: any) {
  const { size, order, limit, breedId } = action.payload;
  const queryParams = `size=${size}&order=${order}&limit=${limit}&breedId=${breedId}`;
  const fullURL = `https://api.thecatapi.com/v1/images/search?${queryParams}`;

  const data = yield fetch(fullURL, {
    method: "GET",
    headers: {
      "x-api-key": "MjUOMDk5"
    }
  }).then(response => response.json());

  const imageData: IImage = {
    imageURL: data[0] ? data[0].url : "",
    breedName: data[0] ? data[0].breeds.name : "",
    categoryName: data[0].categories ? data[0].categories[0].name : "",
    lifespan: data[0] ? data[0].life_span : ""
  };

  if (data[0]) {
    yield put(searchActions.appendToHistory(data[0].id as string));
    yield put(searchActions.searchSuccess(imageData));
  }
}

function* searchPrev(action: any) {
  const fullURL = `https://api.thecatapi.com/v1/images/${action.payload.imageID}`;

  const data = yield fetch(fullURL, {
    method: "GET",
    headers: {
      "x-api-key": "MjUOMDk5"
    }
  }).then(response => response.json());

  if (data) {
    const imageData: IImage = {
      imageURL: data.url,
      breedName: "",
      categoryName: "",
      lifespan: ""
    };

    yield put(searchActions.searchSuccess(imageData));
  }
}

export function* searchSaga() {
  yield takeLatest(SearchActions.SEARCH, searchImages);
  yield takeLatest(SearchActions.SEARCH_PREV, searchPrev);
}
