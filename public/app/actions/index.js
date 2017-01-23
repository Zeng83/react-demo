import get from "lodash/get";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL,
  FILTER_ITEM,
  SEARCH_BY_TYPE,
  SEARCH_BY_LOCATION,
  LOCATION,
  FOOD
} from "../constants/actionTypes";
import {fetchSearchRequest} from "../api/search.api";

export const filterItem = (val) => (dispatch, getState) => {
  const state = getState();
  const searchContent = val;
  const options = {
    ...state.filter,
    searchContent
  }

  return fetchSearchRequest(options).then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then((data) => {
    dispatch({
      type: ADD_ITEM,
      payload: data
    });
    dispatch({
      type: options.searchBy === "type" ? FOOD : LOCATION,
      payload: val
    });
  });
};

export const searchByLocation = () => {
  return {
    type: SEARCH_BY_LOCATION
  };
};

export const searchByType = () => {
  return {
    type: SEARCH_BY_TYPE
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  };
};
