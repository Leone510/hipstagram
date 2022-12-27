import { useSelector, useDispatch } from "react-redux";
import { fakeDBActions } from "../store/fakeDB/actionTypes";

export const useFakeAPI = () => {
   const fakeDbUser = useSelector(store => store.fakeDB.user);
   const dispatch = useDispatch();

   const convertToBase64 = (fileImage=null) => {
      if ((fileImage === null) || (fileImage.type !== "image/png")) {
         return fakeDbUser.avatar
      }
      
      return new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(fileImage);
         reader.onload = () => {
            resolve(reader.result);
         }
         reader.onerror = (error) => {
            reject(error);
         }
      })
   }

//==================================================================

   const fakeRegistration = ({login, email, password}) => {
      const newId = "userID" + new Date().toUTCString().replace(/\s/g, "");

      dispatch(fakeDBActions.changeUserData({
         id: newId,
         login: login,
         email: email,
         password: password,
      }));

      return {
         id: newId,
      }
   }

//==================================================================

   const fakeLogin = ({login, password}) => {
      const token = "trueTokenForLogin"

      if (login === fakeDbUser.login && password === fakeDbUser.password) {
         return token;
      }

      throw Error("Wrong login or password");
   }

//==================================================================

   const getCurrentUser = ( userToken ) => {
      const { token, ...currentUser } = fakeDbUser;
      if (userToken === token) {

         return currentUser
      }

      // throw Error("Wrong token");
   }

//==================================================================

   const fakeSetUser = async ({token, avatar, ...newData}) => {
      if (fakeDbUser.token !== token) {
         throw new Error("WRONG TOKEN!!!");
      }
      
      const base64 = (typeof(avatar) === "string")
         ? avatar
         : await convertToBase64(avatar[0])

      dispatch(fakeDBActions.changeUserData({
         avatar: base64,
         ...newData
      }));

      return {
         ...newData,
         avatar: base64,
      }
   }

//==================================================================

   const fakeCreatePost = (token, postFormData) => {
      if (fakeDbUser.token !== token) {
         throw new Error("WRONG TOKEN!!!");
      }

      const newID = "postID" + new Date().toUTCString().replace(/\s/g, "");
      const postImage = postFormData.get("image");
      const postTitle = postFormData.get("title");
      const ownerID = fakeDbUser.id

      const newPost = {
         id: newID,
         image: postImage,
         title: postTitle,
         likes: [],
         ownerID: ownerID,
      }

      dispatch(fakeDBActions.addPost(newPost))
   }

   return {
      fakeRegistration,
      fakeLogin,
      fakeSetUser,
      getCurrentUser,
      fakeCreatePost,
   }
}