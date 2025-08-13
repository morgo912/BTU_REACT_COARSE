import axios from "axios";

//creating an Axios instance and sotre it in the "api" variable
export const api = axios.create({
  //BaseUrl for all requests made with this axios instance
  baseURL: "https://jsonplaceholder.typicode.com/",
  
  //Time limit before a reques is considered failed 
  timeout:5000

}) 