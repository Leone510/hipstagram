import { setUser } from "../../api";
import { currentUserActions } from "../currentUser/actionTypes";

export const setUserThunk = (data) => {

   const ImageFileToUpload = async (imageFile) => {
      if (typeof(imageFile) !== "string") {

         const base64 = await convertToBase64(imageFile);

         const createdImg = new Image();
         createdImg.src = base64;
         
         const canvasAvatar = document.createElement("canvas")
         canvasAvatar.width = 200;
         canvasAvatar.height = 200;
         canvasAvatar.getContext("2d").drawImage(createdImg, 0, 0, 200, 200)
         
         return canvasAvatar.toDataURL();
      }
      return imageFile;
   }

   const convertToBase64 = (file) => {
      return new Promise ((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => {
            // console.log(' converting: ', reader.result);
            
            resolve(reader.result);
         }
         reader.onerror = (error) => { 
            reject(error);
         }
      })
   }
   
   return async dispatch => {
      data.avatar = await ImageFileToUpload(data.avatar[0]);

      try {
         const userData = await setUser(JSON.stringify(data));         
         dispatch(currentUserActions.setCurrentUser(userData));
      } catch (err) {
         console.log(err);
      }
   }
}