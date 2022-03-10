import styles from "./SettingPage.module.scss";
import { Header } from "../../components/Header/Header";
import { MainSetting } from "./MainSetting/MainSetting";

export const SettingPage = () => {

   return (
      <div className={styles.setting}>
         <Header page="setting"/>
         <MainSetting/>
      </div>
   )
}