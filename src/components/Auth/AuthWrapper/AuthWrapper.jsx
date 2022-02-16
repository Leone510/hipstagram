import styles from "./AuthWrapper.module.scss"

export const AuthWrapper = ({children}) => {

   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   )
}