import axios from "axios"

const baseDomain = import.meta.env.VITE_BASE_DOMAIN;
const baseURL = baseDomain + import.meta.env.VITE_BASE_URL

const AxiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 10000 * 5, // Wait for 5 seconds
});

export default AxiosClient;