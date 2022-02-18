import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../data/schema";
import { InputWrapper } from "../InputWrapper/InputWrapper";

export const Form = ({page, buttons, children}) => {
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
   })


   return (
      <form className={styles.form}>
         <h1 className={styles.title}>
            {page.toUpperCase()}
         </h1>

         <div className={styles.body}>
            {children.map(field => <InputWrapper key={field} field={field}/>)}
         </div>

         <div className={styles.buttons}>
            {buttons}
         </div>
      </form>
   )
}