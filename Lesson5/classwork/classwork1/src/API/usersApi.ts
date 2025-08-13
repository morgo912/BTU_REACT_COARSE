import axios from "axios";

export const usersApi = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com/",
  timeout:5000
}) 