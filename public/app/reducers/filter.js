import {handleActions} from "redux-actions";

import {FILTER_ITEM} from "../constants/actionTypes";

const initialFilterItem = "";

export default handleActions({
  [FILTER_ITEM]: (state = initialFilterItem, action) => {
    return action.filterItem;
  }
}, initialFilterItem);
