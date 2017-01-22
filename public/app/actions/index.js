import get from "lodash/get";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL,
  FILTER_ITEM
} from "../constants/actionTypes";
import {fetchSearchRequest} from "../api/search.api";

export const addItem = () => (dispatch) => {
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

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  }
}

export const filterItem = (e) => {
  const filterItem = get(e, "target.value");
  return {
    type: FILTER_ITEM,
    filterItem
  }
}
