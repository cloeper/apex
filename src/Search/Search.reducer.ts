import { SearchActions } from "./Search.actions";
import { Record } from "immutable";

export interface IImage {
  imageURL: string;
  breedName: string;
  categoryName: string;
  lifespan: string;
}

export interface ISeachState {
  imageHistory: string[];
  imageData: IImage;
}

const searchStateInitialRecord = Record<ISeachState>({
  imageHistory: [],
  imageData: {
    imageURL: "",
    breedName: "",
    categoryName: "",
    lifespan: ""
  }
});

export function searchReducer(
  state = searchStateInitialRecord(),
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SearchActions.SEARCH_SUCCESS:
      return state.set("imageData", action.payload);
    case SearchActions.APPEND_TO_HISTORY:
      const imageHistory = state.get("imageHistory");
      imageHistory.push(action.payload.imageID);
      return state.set("imageHistory", imageHistory);
    default:
      return state;
  }
}
