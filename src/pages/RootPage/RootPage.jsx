import styles from "./RootPage.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Header } from "../../components/Header/Header";
import { Main } from "./Main/Main";
import { currentUserThunk } from "../../store/thunks/currentUserThunk";

export const RootPage = () => {
   const {token} = useSelector(store => store.auth);
   const userData = useSelector(store => store.currentUser);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   console.log("User ID: ", userData.id);

   useEffect(() => {
      token === null
         ? navigate("/login")
         // : dispatch(currentUserThunk(token))
         : console.log(userData);
   }, [token, navigate, dispatch]);

   return (
      <div className={styles.rootPage}>
         <Header page="home"/>
         <Main userData={userData}/>
      </div>
      
   )
}
