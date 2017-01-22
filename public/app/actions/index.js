import get from "lodash/get";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL,
  FILTER_ITEM,
  SEARCH_BY_TYPE,
  SEARCH_BY_LOCATION
} from "../constants/actionTypes";
import {
  fetchSearchRequest,
  fetchByFoodType,
  fetchByLocation
} from "../api/search.api";

export const addItem = () => (dispatch, getState) => {
  return fetchSearchRequest().then((response) => {
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
  });
}

export const filterItem = (val) => (dispatch, getState) => {
  const state = getState();
  const searchBy = state.filter.searchBy || "type";
  const searchContent = val;

  if (searchBy === "type") {
    return fetchByFoodType(val).then((response) => {
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
    });
  } else {
    return fetchByLocation(val).then((response) => {
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
    });
  }
}

export const searchByLocation = () => {
  return {
    type: SEARCH_BY_LOCATION
  }
}

export const searchByType = () => {
  return {
    type: SEARCH_BY_TYPE
  }
}

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  }
}
