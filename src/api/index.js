import axios from "axios";
import { UseLogout } from "../customHooks/UseLogout";

const api = axios.create({
   baseURL: 'https://hipstagram-api.herokuapp.com',
   headers: {
      'Content-Type': 'application/json',
      'Authorization': '',
   }
})

api.interceptors.request.use(config => {
   config.headers['Authorization'] = "";
   return config;
})

api.interceptors.response.use((response) => {
   return response.data;
}, (error) => {
   if (error.response.status === 401) {
      const logout = UseLogout();
      logout();
      return;
   }
   const lol = Promise.reject(error);
   return lol;
});

export const registrationUserRequest = (data) => {
   return api.post(
      '/auth/registration', 
      data,
   )
}

export const loginUserRequest = (data) => {
   console.log(data)
   return api.post(
      '/auth/login',
      data,
   )
}