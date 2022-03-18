import { forwardRef } from "react";
import styles from "./Input.module.scss";

export const Input = forwardRef((props, ref) => {
   
   return (
      <input className={styles.input} ref={ref} {...props}/>
   )
})

// export const Input = () => {

//    return (
//       <input className={styles.input} />
//    )
// }