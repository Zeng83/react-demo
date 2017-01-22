import Promise from "bluebird";
import fetch from "isomorphic-fetch";

export const fetchSearchRequest = () => {
  return fetch("//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip=%2294560%22%20and%20query=%22Italian%22&format=json");
};

export const fetchByLocation = (val) => {
  const url = "//query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20local.search%20WHERE%20location=%22"+ val +"%22%20and%20query=%22%22&format=json";
  return fetch(url);
}

export const fetchByFoodType = (val) => {
  const url = "//query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20local.search%20WHERE%20location=%22sunnyvale%22%20and%20query=%22"+ val +"%22&format=json";
  return fetch(url);
}
