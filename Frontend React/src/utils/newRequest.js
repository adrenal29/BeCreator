import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://34.131.221.158:8800/api/",
  withCredentials: true,
});

export default newRequest;
