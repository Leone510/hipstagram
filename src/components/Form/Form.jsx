import styles from "./Form.module.scss";

export const Form = ({children, buttons, title, ...props}) => {

   return (
      <form className={styles.form} {...props}>
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
}