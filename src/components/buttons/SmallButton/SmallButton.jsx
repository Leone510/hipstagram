import styles from "./SmallButton.module.scss";

export const SmallButton = ({children, active, ...props}) => {

   return (
      <button  
         {...props}
         className={
            active
               ? [styles.btn, styles.active].join(" ")
               : styles.btn
         }
      >
         {children}
      </button>
   )
}