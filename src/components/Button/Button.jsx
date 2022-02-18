import styles from "./Button.module.scss";

export const Button = ({children, ...props}) => {

   return (
      <button className={styles.button} type="button" {...props}>
         {children}
      </button>
   )
}