import axios from "axios";
import { UseLogout } from "../customHooks/UseLogout";
import store from '../store';

const api = axios.create({
   baseURL: 'https://hipstagram-api.herokuapp.com',
   headers: {
      'Content-Type': 'application/json',
      'Authorization': '',
   }
})

api.interceptors.request.use(config => {
   config.headers['Authorization'] = store.getState().auth.token;
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
   console.log('iterceptors error:', error);
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
   return api.post(
      '/auth/login',
      data,
   )
}

export const getCurrentUser = (data) => {
   return api.get(
      '/users/current',
      data,
   )
}

export const setUser = (data) => {
   return api.patch(
      '/users/current',
      data,
   )
}