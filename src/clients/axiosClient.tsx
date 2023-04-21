import axios from "axios";
// TODO set baseURL based on environment
const axiosClient = () =>
  axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });
export default axiosClient;
