import axios from "axios"

export const Api = axios.create({
    baseURL: "https://db-fullstack-ekz2.onrender.com",
    timeout: 8000,
})