// import { useSelector } from "react-redux";
import styles from "./Section.module.scss";

export const Section = () => {
   // const {posts} = useSelector(store => store.currentUser);

   return (
      <section className={styles.section}>
         <div className={styles.sectionBox}>
            <h2>Empty</h2>
         </div>
      </section>
   )
}