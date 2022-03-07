import styles from "./RootPage.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

export const RootPage = () => {
   const {token} = useSelector(store => store.auth);
   const navigate = useNavigate();

   useEffect(() => {
      console.log(token);
      if (token === null) navigate("/login");
   }, []);

   return (
      <div className={styles.rootPage}>
         <Header/>
         <Main/>
      </div>
      
   )
}
