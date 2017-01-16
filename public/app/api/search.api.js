import Promise from "bluebird";
import fetch from "isomorphic-fetch";

export const fetchSearchRequest = () => {
  // TODO: WIP: hookup search api from here
  // return fetch("http://developer.yahoo.com/yql/console/?q=show%20tables", {
  //   // method: "POST",
  //   // body: stream
  // });
  return Promise.resolve({
    id: 123,
    name: "huaji"
  })
};
