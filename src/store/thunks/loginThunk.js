import { loginUserRequest } from "../../api"
import { authActions } from "../auth/actionTypes";

export const loginThunk = (userAuth) => {
   return async dispatch => {
      try {
         const data = await loginUserRequest(JSON.stringify(userAuth));
         localStorage.setItem('hipstagramToken', data.access_token);
         dispatch(authActions.login(data.access_token));
      } catch (e) {
         console.log(e);
      }
   }
}