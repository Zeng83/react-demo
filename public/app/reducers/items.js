import Immutable from "immutable";
import {handleActions} from "redux-actions";
import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL
} from "../constants/actionTypes";

const initialItems = Immutable.List([1, 2, 3]);

export default handleActions({
  [ADD_ITEM]: (state = initialItems, action) => {
    return state.push(state.size !== 0 ? state.get(-1) + 1 : 1);
  },
  [DELETE_ITEM]: (state = initialItems, action) => {
    return state.delete(state.indexOf(action.item));
  },
  [DELETE_ALL]: (state = initialItems, action) => {
    return state.clear();
  }
}, initialItems);
