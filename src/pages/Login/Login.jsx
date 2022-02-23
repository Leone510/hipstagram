import styles from "../../components/AuthContainer/AuthContainer.module.scss";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema as schema } from "../../data/schema";
import { useEffect, useState } from "react";
import { Preload } from "../../components/Preload/Preload";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/thunks/loginThunk";

export const Login = () => {
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
   })
   const [preload, setPreload] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      setPreload(false)
   }, [])

   const onSubmit = (data) => {
      reset();
      setPreload(true);
      dispatch(loginThunk(data));
   }

   const onError = (data) => {
      console.log("error: ", data);
   }

   return (
      <Modal>
         { preload
            ? <Preload/>
            : <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
               <h1 className={styles.title}>
                  LOGIN
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
                        Password
                     </h2>
                     <input className={styles.input} {...register('password')}/>
                     <h5 className={styles.error}>
                        {!!errors.password?.message ? errors.password?.message : " "}
                     </h5>
                  </div>
               </div>

               <div className={styles.buttons}>
                  <Button onClick={() => navigate("/registration")} key="toReg">
                     To Registration Form
                  </Button>

                  <Button type="submit">SEND</Button>
               </div>
            </form>}
      </Modal>
   )
}