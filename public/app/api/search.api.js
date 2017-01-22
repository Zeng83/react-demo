import Promise from "bluebird";
import fetch from "isomorphic-fetch";

export const fetchSearchRequest = () => {
  return fetch("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip=%2294560%22%20and%20query=%22Italian%22&format=json");
};
