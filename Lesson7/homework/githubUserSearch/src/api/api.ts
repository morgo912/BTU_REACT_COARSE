import axios from "axios";

export const githubUsersApi = axios.create({
  baseURL:"https://api.github.com/users/"
})