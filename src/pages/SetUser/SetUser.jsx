import styles from "./SetUser.module.scss";
import { Form } from "../../components/Form/Form";
import { WrapperContainer } from "../../components/WrapperContainer/WrapperContainer";
import { Button } from "../../components/buttons/Button/Button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { setUserSchema as schema } from "../../data/schema";
import { useEffect, useState } from "react";
import { Preload } from "../../components/Preload/Preload";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Input } from "../../components/Input/Input";
import { FileInput } from "../../components/FileInput/FileInput";
import { useSelector } from "react-redux";

export const SetUser = () => {
   const userData = useSelector(store => store.currentUser);
   const {register, control, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
      mode: "onBlur",
      defaultValues: {
         login: userData.login,
         avatar: userData.avatar,
         name: userData.name,
         surname: userData.surname,
         email: userData.email,
      }
   })
   const [preload, setPreload] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      setPreload(false)
   }, [])

   const sendForm = async (event) => {
      reset();
      setPreload(true);
      // try {
      //    await registrationUserRequest(JSON.stringify(event));
      //    navigate(`/confirm/User ${event.login} was created!`)
      // } catch (promise) {
      //    const errorMessage = promise.response.data
      //    navigate(`/error/${errorMessage}`)
      // }
   }

   const buttons = [
      <Button onClick={() => navigate("/userPage")} key="navigate">CLOSE</Button>,

      <Button 
         onClick={() => navigate("/userPage")}
         type="submit"
         key="submit"
      >
         SEND
      </Button>,
   ]

   return (
      <div className={styles.setUser}>
         <WrapperContainer>
            <div className={styles.settingBlock}>
               {preload
                  ?  <Preload/>
                  :  <Form
                        onSubmit={handleSubmit(sendForm)}
                        title="SET USER" 
                        buttons={buttons}
                     >
                        <FileInput name="avatar" control={control}/>

                        <InputWrapper 
                           fieldName="Login"
                           error={!!errors.login?.message ? errors.login?.message : " "}
                        >
                           <Input {...register('login')}/>
                        </InputWrapper>

                        <InputWrapper 
                           fieldName="Name"
                           error={!!errors.name?.message ? errors.name?.message : " "}
                        >
                           <Input {...register('name')}/>
                        </InputWrapper>

                        <InputWrapper 
                           fieldName="Surname"
                           error={!!errors.surname?.message ? errors.surname?.message : " "}
                        >
                           <Input {...register('surname')}/>
                        </InputWrapper>

                        <InputWrapper 
                           fieldName="Email"
                           error={!!errors.email?.message ? errors.email?.message : " "}
                        >
                           <Input {...register('email')}/>
                        </InputWrapper>
                     </Form>
               }
            </div>
         </WrapperContainer>
      </div>
   )
}