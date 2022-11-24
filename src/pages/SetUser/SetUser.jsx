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
import { useDispatch, useSelector } from "react-redux";
import { setUserThunk } from "../../store/thunks/setUserThunk";
import { AvatarImageWrapper } from "../../components/AvatarImageWrapper/AvatarImageWrapper";

export const SetUser = () => {
   const userData = useSelector(store => store.currentUser);
   const dispatch = useDispatch();
   const {register, control, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
      mode: "onBlur",
      defaultValues: {
         login: userData.login,
         avatar: userData.avatar,
         firstName: userData.name,
         lastName: userData.surname,
         email: userData.email,
      }
   })
   const [preload, setPreload] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      setPreload(false)
   }, [])

   const sendForm = async (data) => {
      await dispatch(setUserThunk(data));
      navigate("/setUser");
   }

   const buttons = [
      <Button onClick={() => navigate("/userPage")} key="navigate">CLOSE</Button>,

      <Button 
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
                        <AvatarImageWrapper>
                           <FileInput 
                              name="avatar" 
                              control={control} 
                              defaultImage={userData.avatar}
                           />   
                        </AvatarImageWrapper>

                        <InputWrapper 
                           fieldName="Login"
                           error={!!errors.login?.message ? errors.login?.message : " "}
                        >
                           <Input {...register('login')}/>
                        </InputWrapper>

                        <InputWrapper 
                           fieldName="Name"
                           error={!!errors.firstName?.message ? errors.firstName?.message : " "}
                        >
                           <Input {...register('firstName')}/>
                        </InputWrapper>

                        <InputWrapper 
                           fieldName="Surname"
                           error={!!errors.lastName?.message ? errors.lastName?.message : " "}
                        >
                           <Input {...register('lastName')}/>
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