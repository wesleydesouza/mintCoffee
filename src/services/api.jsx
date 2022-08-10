import axios from "axios";

const api = axios.create({
    baseURL: "https://coffee.alexflipnote.dev/"
});

export default api;