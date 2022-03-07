import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import { authActions } from "../store/auth/actionTypes";

export const UseLogout = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const logout = async() => {
      localStorage.removeItem('hipstagramToken');
      await dispatch(authActions.logout());
      navigate("/login")
   }

   return logout;
}