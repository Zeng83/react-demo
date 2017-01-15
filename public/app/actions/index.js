import get from "lodash/get";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL,
  FILTER_ITEM
} from "../constants/actionTypes";

export const addItem = () => {
  return dispatch => {
    setTimeout(() => dispatch({type: ADD_ITEM}), 1000)
  };
}
export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item
  }
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
