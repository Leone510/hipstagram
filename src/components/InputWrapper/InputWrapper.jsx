import { Input } from "../Input/Input";
import styles from "./InputWrapper.module.scss";

export const InputWrapper = ({error, field}) => {

   return (
      <div className={styles.InputWrapper}>
         <h2 className={styles.title}>{field}</h2>
         <Input/>
         <h5 className={styles.error}>error here</h5>
      </div>
   )
}