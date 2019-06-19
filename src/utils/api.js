import axios from "axios";
import md5 from "md5";
import { constants } from "./constants";

const config = {
  params: {
    apikey: constants.api.publicKey,
    hash: md5(
      constants.api.ts + constants.api.privateKey + constants.api.publicKey
    ),
    ts: constants.api.ts
  },
  method: "GET",
  headers: {
    Accept: "*/*"
  }
};


const get = (endpoint, params) => {
  // add customn params if needed
  config.params  = {...config.params, ...params}

  return axios.get(constants.api.host + endpoint, config)
}

export const getCharacters = (params) => {

  return get("/characters", params)
}

export const getCharacter = (id, params) => {

  return get("/characters/" + id, params)
}

export const getComic = (id, params) => {

  return get("/comic/" + id, params)
}

export const getComics = (params) => {

  return get("/comics/", params)
}
