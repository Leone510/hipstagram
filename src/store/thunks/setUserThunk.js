import { setUser } from "../../api";
import { currentUserActions } from "../currentUser/actionTypes";
import { protectEmail } from 'protect-email';

export const setUserThunk = (data) => {
   // if (data.avatar !== "string") {
   //    const reader = new FileReader();
   //    reader.readAsDataURL(data.avatar[0]);
   //    reader.onload = () => {
   //       data.avatar = reader.result
   //    }
   // }
   data.avatar = "https://thumbs.dreamstime.com/b/great-indian-kingfisher-immage-beautiful-kingfisher-exotic-tropical-bird-found-indian-continent-166342246.jpg"
   // data.email = protectEmail(data.email);
   
   return async dispatch => {
      console.log("sending data:", data);
      
      try {
         const userData = await setUser(JSON.stringify(data));
         console.log(userData);
         
         dispatch(currentUserActions.setCurrentUser(userData));
      } catch (err) {
         console.log(err);
      }
   }
}