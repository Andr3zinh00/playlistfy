import axios from "axios";
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://playlistfy-api.up.railway.app/"
    : "http://localhost:3333/";
const auth = axios.create({
  baseURL: API_URL,
});

export default auth;
