import styles from "./Heaader.module.scss";
import { WrapperContainer } from "../WrapperContainer/WrapperContainer";
import { Logotype } from "./Logotype/Logotype";
import { ButtonsBox } from "./ButtonsBox/ButtonsBox";

export const Header = (props) => {

   return (
      <header className={styles.header}>
         <WrapperContainer>
            <div className={styles.headerBox}>
               <Logotype/>
               <ButtonsBox {...props}/>
            </div>
         </WrapperContainer>
      </header>
   )
}