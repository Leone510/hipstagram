import styles from "./Button.module.scss";

export const Button = ({children, active, ...props}) => {

   return (
      <button className={
         active
            ? [styles.button, styles.active].join(" ")
            : styles.button
      } {...props}>
         {children}
      </button>
   )
}