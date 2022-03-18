import styles from "./Form.module.scss";

export const Form = ({children, buttons, title, ...props}) => {

   return (
      <form className={styles.form} {...props}>
               <h1 className={styles.title}>
                  {title}
               </h1>

               <div className={styles.body}>
                  {children}
               </div>

               <div className={styles.buttons}>
                  {buttons}
               </div>
            </form>
   )
}