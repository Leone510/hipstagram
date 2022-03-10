import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import styles from "./CreateMain.module.scss";

export const CreateMain = () => {

   return (
      <div className={styles.main}>
         <WrapperContainer>
            <div className={styles.mainBox}>
               Create Post
            </div>
         </WrapperContainer>
      </div>
   )
}