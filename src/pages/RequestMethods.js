import axios from "axios";

const BASE_URL = "http://localhost:3002/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

