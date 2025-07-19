import axios from "axios";

const blogFetch = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default blogFetch;
