import styles from "../../components/AuthContainer/AuthContainer.module.scss";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../data/schema";

export const Registration = () => {
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
   })
   const navigate = useNavigate();

   const sendForm = (event) => {
      reset()
      console.log(event);
   }

   return (
      <Modal>
         <form className={styles.form} onSubmit={handleSubmit(sendForm)}>
            <h1 className={styles.title}>
               REGISTRATION
            </h1>

            <div className={styles.body}>
               <div className={styles.wrapper}>
                  <h2 className={styles.title}>
                     Login
                  </h2>
                  <input className={styles.input} {...register('login')}/>
                  <h5 className={styles.error}>
                     {!!errors.login?.message ? errors.login?.message : " "}
                  </h5>
               </div>

               <div className={styles.wrapper}>
                  <h2 className={styles.title}>
                     Email
                  </h2>
                  <input className={styles.input} {...register('email')}/>
                  <h5 className={styles.error}>
                     {!!errors.email?.message ? errors.email?.message : " "}
                  </h5>
               </div>

               <div className={styles.wrapper}>
                  <h2 className={styles.title}>
                     Password
                  </h2>
                  <input className={styles.input} {...register('password')}/>
                  <h5 className={styles.error}>
                     {!!errors.password?.message ? errors.password?.message : " "}
                  </h5>
               </div>
            </div>

            <div className={styles.buttons}>
               <Button onClick={() => navigate("/login")}>
                  To Login Form
               </Button>
               <Button type="submit">SEND</Button>
            </div>
         </form>
      </Modal>
   )
}
