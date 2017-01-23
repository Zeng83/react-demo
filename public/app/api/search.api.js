import get from "lodash/get";
import Promise from "bluebird";
import fetch from "isomorphic-fetch";

const queryBuilder = (options) => {
  const searchContent = get(options, "searchContent", "");
  const searchBy = get(options, "searchBy");
  let location = get(options, "location", "");
  let foodOfType = get(options, "food", "");

  if (searchBy === "type") {
    foodOfType = searchContent;
  } else {
    location = searchContent
  }

  const sqlQuery = `SELECT * FROM local.search WHERE location="` + location + `" and query="`+foodOfType+`"`;

  return encodeURI(sqlQuery);
}

export const fetchSearchRequest = (options) => {
  const query = queryBuilder(options);
  const url = "//query.yahooapis.com/v1/public/yql?q="+ query +"&format=json";
  return fetch(url);
}
