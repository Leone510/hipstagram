import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import styles from "./MainSetting.module.scss";

export const MainSetting = () => {

   return (
      <main className={styles.main}>
         <WrapperContainer>
            <div className={styles.mainBox}>
               Setting
            </div>
         </WrapperContainer>
      </main>
   )
}