import config from "./../config/config"

export const baseURL = ()=> {
  if (process.env.NODE_ENV.trim() == "production")return "https://shrouded-thicket-19388.herokuapp.com"
  return `http://localhost:${config.port}`
}

export function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}