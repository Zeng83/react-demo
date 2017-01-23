import {handleActions} from "redux-actions";

import {
  FILTER_ITEM,
  SEARCH_BY_LOCATION,
  SEARCH_BY_TYPE,
  LOCATION,
  FOOD
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
  [LOCATION]: (state = {}, action) => {
    console.log("location reducer", action);
    return {
      ...state,
      location: action.payload
    };
  },
  [FOOD]: (state = {}, action) => {
    console.log("food reducer", action);
    return {
      ...state,
      food: action.payload
    };
  }
}, {
  initialFilterItem: null,
  searchBy: "type",
  location: "san francisco",
  food: ""
});
