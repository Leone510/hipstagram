import { forwardRef } from "react";
import styles from "./Form.module.scss";

export const Form = forwardRef(({children, buttons, title, ...props}, ref) => {

   return (
      <form ref={ref} className={styles.form} {...props}>
               <h2 className={styles.title}>
                  {title}
               </h2>

               <div className={styles.body}>
                  {children}
               </div>

               <div className={styles.buttons}>
                  {buttons}
               </div>
            </form>
   )
})