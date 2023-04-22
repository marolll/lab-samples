import axios from "axios";

const axiosConfig = () => {
  const baseUrl = "https://sandbox.elabjournal.com/api/v1";

  // AXIOS DEFAULTS
  axios.defaults.baseURL = baseUrl;
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.headers.common["Authorization"] =
    "3c64fa0424718149b4e6a6372a284d81";
};

export default axiosConfig;
