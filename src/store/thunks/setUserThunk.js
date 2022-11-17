import { setUser } from "../../api";
import { currentUserActions } from "../currentUser/actionTypes";

export const setUserThunk = (data) => {

   const ImageFileToUpload = async (image) => {
      if (typeof(image) !== "string") {
         const base64 = await convertToBase64(image);
         return base64;
      }
      return image;
   }

   const convertToBase64 = (file) => {
      return new Promise ((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => {
            console.log(' converting: ', reader.result);
            
            resolve(reader.result);
         }
         reader.onerror = (error) => { 
            reject(error);
         }
      })
   }
   
   return async dispatch => {
      console.log("incoming data:", data);

      data.avatar = await ImageFileToUpload(data.avatar[0]);

      console.log("incoming data:", data);
      
      try {
         const userData = await setUser(JSON.stringify(data));
         console.log(userData);
         
         dispatch(currentUserActions.setCurrentUser(userData));
      } catch (err) {
         console.log(err);
      }
   }
}