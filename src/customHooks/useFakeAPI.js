import { useSelector } from "react-redux";

export const useFakeAPI = () => {
   const currentUser = useSelector(store => store.currentUser)
   const registration = ({login, email, password}) => {
      return {
         id: new Date().toUTCString().replace(/\s/g, ""),
         login: login,
         email: email,
         password: password,
      }
   }

   const login = ({login, password}) => {
      const token = "trueTokenForLogin"

      if (login === currentUser.login && password === currentUser.password) {
         return token;
      }

      throw Error("Wrong login or password");
   }

   return {
      registration,
      login,
   }
}