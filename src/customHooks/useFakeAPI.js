import { useSelector, useDispatch } from "react-redux";
import { currentUserActions } from "../store/currentUser/actionTypes";

export const useFakeAPI = () => {
   const currentUser = useSelector(store => store.currentUser);
   const { user } = useSelector(store => store.fakeDB);
   const dispatch = useDispatch();

   const convertToBase64 = (fileImage) => {
      
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

   const fakeRegistration = ({login, email, password}) => {
      const newId = new Date().toUTCString().replace(/\s/g, "");

      dispatch(currentUserActions.setCurrentUser({
         id: newId,
         login: login,
         email: email,
         password: password,
      }));

      return {
         id: newId,
      }
   }

   const login = ({login, password}) => {
      const token = "trueTokenForLogin"

      if (login === currentUser.login && password === currentUser.password) {
         return token;
      }

      throw Error("Wrong login or password");
   }

   const getCurrentUser = ( userToken ) => {
      const { token } = user;
      if (userToken === token) {
         dispatch(currentUserActions.setCurrentUser(user));

         return {
            ...user
          }
      }
   }

   const setUser = async ({avatar, ...newData}) => {
      
      const base64 = (typeof(avatar) === "string")
         ? avatar
         : await convertToBase64(avatar[0])

      return {
         ...newData,
         avatar: base64,
      }
   }

   return {
      fakeRegistration,
      login,
      setUser,
      getCurrentUser,
   }
}