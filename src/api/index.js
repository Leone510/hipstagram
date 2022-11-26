import axios from "axios";
import { UseLogout } from "../customHooks/UseLogout";
import store from '../store';

const apiJson = axios.create({
   baseURL: 'https://hipstagram-api.herokuapp.com',
   headers: {
      'Content-Type': 'application/json',
      'Authorization': '',
   }
})

const apiFormData = axios.create({
   baseURL: 'https://hipstagram-api.herokuapp.com',
   headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': '',
   }
})

apiJson.interceptors.request.use(config => {
   config.headers['Authorization'] = store.getState().auth.token;
   return config;
})

apiJson.interceptors.response.use((response) => {
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
   return apiJson.post(
      '/auth/registration', 
      data,
   )
}

export const loginUserRequest = (data) => {
   return apiJson.post(
      '/auth/login',
      data,
   )
}

export const getCurrentUser = (data) => {
   return apiJson.get(
      '/users/current',
      data,
   )
}

export const setUser = (data) => {
   return apiJson.patch(
      '/users/current',
      data,
   )
}
export const createPost = (data) => {
   return apiFormData.post(
      '/posts',
      data
   )
}