import styles from "./RootPage.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { Main } from "./Main/Main";
import { useLogout } from "../../customHooks/UseLogout";
// import { currentUserThunk } from "../../store/thunks/currentUserThunk";

export const RootPage = () => {
   const { token } = useSelector(store => store.auth);
   const logout = useLogout();

   useEffect(() => {
      token === null && logout();
   }, [token, logout]);

   return (
      <div className={styles.rootPage}>
         <Header page="home"/>
         <Main/>
      </div>
      
   )
}
