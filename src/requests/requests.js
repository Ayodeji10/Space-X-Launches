import axios from "axios";
import { GET_ALL_LAUNCHES, GET_ONE_LAUNCH } from "./endpoints";

export const ALL_LAUNCHES = () => {
  return axios.get(GET_ALL_LAUNCHES).then((response) => {
    return response;
  });
};

export const SINGLE_LAUNCH = (id) => {
  return axios.get(GET_ONE_LAUNCH(id)).then((res) => {
    return res;
  });
};
