import styles from "./WrapperContainer.module.scss"

export const WrapperContainer = ({children}) => {

   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   )
}