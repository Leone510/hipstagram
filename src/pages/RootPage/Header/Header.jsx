import styles from "./Heaader.module.scss";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { Button } from "../../../components/Button/Button";
import { UseLogout } from "../../../customHooks/UseLogout";
import { Logotype } from "./Logotype/Logotype";

export const Header = () => {
   const logout = UseLogout();

   return (
      <header className={styles.header}>
         <WrapperContainer>
            <div className={styles.headerBox}>
               <Logotype/>
               <Button onClick={logout}>LOGOUT</Button>
            </div>
         </WrapperContainer>
      </header>
   )
}