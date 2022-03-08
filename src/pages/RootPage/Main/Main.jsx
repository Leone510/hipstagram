import styles from "./Main.module.scss";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { Aside } from "./Aside/Aside";
import { Section } from "./Section/Section";

export const Main = () => {

   return (
      <main className={styles.main}>
         <WrapperContainer>
            <Aside/>
            <Section/>
         </WrapperContainer>
      </main>
   )
}