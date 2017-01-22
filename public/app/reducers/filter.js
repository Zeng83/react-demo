import {handleActions} from "redux-actions";

import {
  FILTER_ITEM,
  SEARCH_BY_LOCATION,
  SEARCH_BY_TYPE
} from "../constants/actionTypes";

const initialFilterItem = {};

export default handleActions({
  [FILTER_ITEM]: (state = initialFilterItem, action) => {
    return {
      initialFilterItem: action.filterItem
    };
  },
  [SEARCH_BY_LOCATION]: (state = {}, action) => {
    return {
      ...state,
      searchBy: "location"
    };
  },
  [SEARCH_BY_TYPE]: (state = {}, action) => {
    return {
      ...state,
      searchBy: "type"
    };
  },
}, {
  initialFilterItem: null,
  searchBy: null
});
