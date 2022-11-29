import axios from "axios";
import { useLogout } from "../customHooks/UseLogout";
import store from '../store';

const api = (type = 'json') => {

   const contentType = {
      json: 'application/json',
      form: 'multipart/form-data',
   }
   
   const api = axios.create({
      baseURL: 'https://hipstagram-api.herokuapp.com',
      headers: {
         'Content-Type': contentType[type.toLowerCase()],
         'Authorization': '',
      }
   });

   api.interceptors.request.use(config => {
      config.headers['Authorization'] = store.getState().auth.token;
      return config;
   })
   
   api.interceptors.response.use((response) => {
      return response.data;
   }, (error) => {
      if (error.response.status === 401 || 400) {
         console.log('Interceptor error 400/401');
         
         const logout = useLogout();
         logout();
         return;
      }
      console.log('iterceptors error:', error);
      const lol = Promise.reject(error);
      return lol;
   });
   
   return api;
}

// const apiJson = axios.create({
//    baseURL: 'https://hipstagram-api.herokuapp.com',
//    headers: {
//       'Content-Type': 'application/json',
//       'Authorization': '',
//    }
// })

// const apiFormData = axios.create({
//    baseURL: 'https://hipstagram-api.herokuapp.com',
//    headers: {
//       'Content-Type': 'multipart/form-data',
//       'Authorization': '',
//    }
// })


export const registrationUserRequest = (data) => {
   return api('json').post(
      '/auth/registration', 
      data,
   )
}

export const loginUserRequest = (data) => {
   return api('json').post(
      '/auth/login',
      data,
   )
}

export const getCurrentUser = (data) => {
   return api('json').get(
      '/users/current',
      data,
   )
}

export const setUser = (data) => {
   return api('json').patch(
      '/users/current',
      data,
   )
}
export const createPost = (data) => {
   return api('form').post(
      '/posts',
      data
   )
}