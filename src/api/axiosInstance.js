import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cruduser-proj2-backend-dev-acmq.3.us-1.fl0.io/:id",
});

export default axiosInstance;
