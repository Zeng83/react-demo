import remove from "lodash/remove";
import get from "lodash/get";
import {handleActions} from "redux-actions";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL
} from "../constants/actionTypes";

const initialItems = [];

export default handleActions({
  [ADD_ITEM]: (state = initialItems, action) => {
    return [
      ...state,
      ...get(action, "payload.query.results.Result", [])
    ];
  },
  [DELETE_ITEM]: (state = initialItems, action) => {
    return remove(state, (item) => {
      return item !== action.item
    });

  },
  [DELETE_ALL]: (state = initialItems, action) => {
    return initialItems;
  }
}, initialItems);
