import styles from "./Message.module.scss";

export const Message = ({title, error, buttons, children}) => {

   return (
      <div className={styles.box}>
         {error 
            ? <h1 className={styles.title_red}>{title.toUppercase()}</h1>
            : <h1 className={styles.title_green}>{title}</h1>
         }
         
         <div className={styles.body}>
            <h2 className={styles.message}>
               {children}
            </h2>
         </div>

         <div className={styles.buttons}>
            {buttons}
         </div>
      </div>
   )
}