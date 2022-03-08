import { getCurrentUser } from "../../api"
import { currentUserActions } from "../currentUser/actionTypes";

export const currentUserThunk = (token) => {
   return async dispatch => {
      try {
         const userData = await getCurrentUser(token);
         dispatch(currentUserActions.getCurrentUser(userData));
      } catch (e) {
         console.log(e);
      }
   }
}