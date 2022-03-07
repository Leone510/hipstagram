import styles from "./WrapperContainer.module.scss"

export const WrapperContainer = ({children, clases}) => {

   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   )
}