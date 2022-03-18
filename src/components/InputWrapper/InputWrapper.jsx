import styles from "./InputWrapper.module.scss";

export const InputWrapper = ({children, fieldName, error, ...props}) => {

   return (
      <div className={styles.wrapper} {...props}>
         <h2 className={styles.title}>
            {fieldName}
         </h2>

         {children}

         <h5 className={styles.error}>
            {error}
         </h5>
      </div>
   )
}