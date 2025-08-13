import axios from "axios"

export const photosApi = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com/",
  timeout:5000
})