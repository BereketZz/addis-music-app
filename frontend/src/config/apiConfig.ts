import axios from "axios";
//Local host base URL = baseURL:'http://localhost:3001/api/songs'

// Create an axios instance

const api = axios.create({
  baseURL: "https://addis-music-beki.onrender.com/api/songs",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
