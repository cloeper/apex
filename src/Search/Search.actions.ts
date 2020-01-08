import { IImage } from "./Search.reducer";

export enum SearchActions {
  SEARCH = "SEARCH",
  SEARCH_SUCCESS = "SEARCH_SUCCESS",
  SEARCH_FAILED = "SEARCH_FAILED",
  SEARCH_PREV = "SEARCH_PREV",
  APPEND_TO_HISTORY = "APPEND_TO_HISTORY"
}

export const searchActions = {
  search: (size: string, order: string, limit: number, breedId: string) => ({
    type: SearchActions.SEARCH,
    payload: {
      size,
      order,
      limit,
      breedId
    }
  }),
  searchSuccess: (imageData: IImage) => ({
    type: SearchActions.SEARCH_SUCCESS,
    payload: imageData
  }),
  appendToHistory: (imageID: string) => ({
    type: SearchActions.APPEND_TO_HISTORY,
    payload: {
      imageID
    }
  }),
  searchPrev: (imageID: string) => ({
    type: SearchActions.SEARCH_PREV,
    payload: { imageID }
  })
};
