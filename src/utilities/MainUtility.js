import {
  endpoint,
  five,
  four,
  large,
  medium,
  one,
  small,
  three,
  two,
  xlarge,
  xsmall,
} from "../globalConfig/APISupport";
const axios = require("axios");

export function trimDescription(description) {
  if (description.length < 150) return description;
  else return description.substring(0, 150).concat("....");
}
export function getGeners(media, settvg) {
  axios
    .get(endpoint + "/geners/" + media)
    .then((res) => {
      settvg(res.data.genres);
    })
    .catch(() => {
      console.log("Gener list is blank & Somting wrong in getGeners...");
    });
}

export function numSizeAdjust(size, setNumSize) {
  switch (size) {
    case xsmall:
      setNumSize(one);
      break;
    case small:
      setNumSize(two);
      break;
    case medium:
      setNumSize(three);
      break;
    case large:
      setNumSize(four);
      break;
    case xlarge:
      setNumSize(five);
      break;

    default:
      setNumSize(four);
      break;
  }
}
