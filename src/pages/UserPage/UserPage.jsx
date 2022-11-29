import styles from "./UserPage.module.scss";
import { Header } from "../../components/Header/Header";
import { MainUser } from "./MainUser/MainUser";

export const UserPage = () => {

   return (
      <div className={styles.setting}>
         <Header page="setting"/>
         <MainUser/>
      </div>
   )
}