import axios from "axios";

export const axiosInit = () => {
  // AXIOS DEFAULTS
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.headers.common["Authorization"] =
    "3c64fa0424718149b4e6a6372a284d81";
  axios.defaults.headers.common["X-Requested-With"] = "Swagger";
};
