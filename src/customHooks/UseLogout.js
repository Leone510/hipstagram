import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import { authActions } from "../store/auth/actionTypes";

export const useLogout = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const logout = () => {
      localStorage.removeItem('hipstagramToken');
      dispatch(authActions.logout());
      navigate("/login")
   }

   return logout;
}