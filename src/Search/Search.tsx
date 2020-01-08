import React from "react";
import { searchActions } from "./Search.actions";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { IStateStore } from "../store";

const getImage = createSelector(
  (stateStore: IStateStore) => stateStore,
  (stateStore: IStateStore) => stateStore.search.imageData
);

const getPrevImageID = createSelector(
  (stateStore: IStateStore) => stateStore,
  (stateStore: IStateStore) =>
    stateStore.search.imageHistory[stateStore.search.imageHistory.length - 2]
);

export const Search: React.FC = () => {
  const imageData = useSelector(getImage);
  const prevID = useSelector(getPrevImageID);
  const dispatch = useDispatch();

  return (
    <div>
      <img src={imageData.imageURL} alt="cat" />
      <p>Breed: {imageData.breedName}</p>
      <p>Category: {imageData.categoryName}</p>
      <p>Lifespan: {imageData.lifespan}</p>
      <button
        onClick={() => {
          dispatch(searchActions.searchPrev(prevID));
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          dispatch(searchActions.search("med", "ASC", 1, ""));
        }}
      >
        Search
      </button>
    </div>
  );
};
