import remove from "lodash/remove";
import {handleActions} from "redux-actions";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL
} from "../constants/actionTypes";

const initialItems = [1];

export default handleActions({
  [ADD_ITEM]: (state = initialItems, action) => {
    return [
      ...state,
      state.length
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
