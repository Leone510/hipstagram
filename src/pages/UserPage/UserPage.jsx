import styles from "./UserPage.module.scss";
import { Header } from "../../components/Header/Header";
import { MainSetting } from "./MainSetting/MainSetting";

export const UserPage = () => {

   return (
      <div className={styles.setting}>
         <Header page="setting"/>
         <MainSetting/>
      </div>
   )
}