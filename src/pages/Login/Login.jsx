import { Modal } from "../../components/Modal/Modal";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema as schema } from "../../data/schema";
import { useEffect, useState } from "react";
import { Preload } from "../../components/Preload/Preload";
import { useDispatch } from "react-redux";
// import { loginThunk } from "../../store/thunks/loginThunk";    //  for fake DB
import { Button } from "../../components/buttons/Button/Button";
import { Form } from "../../components/Form/Form";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Input } from "../../components/Input/Input";
import { authActions } from "../../store/auth/actionTypes";
import { useFakeAPI } from "../../customHooks/useFakeAPI";

export const Login = () => {
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
   })
   const [preload, setPreload] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { fakeLogin } = useFakeAPI();                            //  for fake DB

   useEffect(() => {
      setPreload(false)
   }, [])

   const onSubmit = async (userLoginData) => {
      reset();
      setPreload(true);
      try {
         // await dispatch(loginThunk(data));                     // for fake DB
         const userToken = fakeLogin(userLoginData)               //---
         dispatch(authActions.login(userToken));                  //---
         navigate("/rootPage");
      } catch (promise) {
         const errorMessage = promise.response.data
         navigate(`/error/${errorMessage}`)
      }
   }

   const buttons = [
      <Button onClick={() => navigate("/registration")} key="navigate">
         To Registration Form
      </Button>,

      <Button type="submit" key="submit">LOGIN</Button>
   ]

   return (
      <Modal>
         { preload
            ? <Preload/>
            : <Form title="Login" onSubmit={handleSubmit(onSubmit)} buttons={buttons}>

               <InputWrapper
                  fieldName="Login"
                  error={!!errors.login?.message ? errors.login?.message : " "}
               >
                  <Input {...register('login')}/>
               </InputWrapper>
               

               <InputWrapper 
                  fieldName="Password"
                  error={!!errors.password?.message ? errors.password?.message : " "}
               >
                  <Input {...register('password')}/>
               </InputWrapper>
              

            </Form>}
      </Modal>
   )
}