import { Modal } from "../../components/Modal/Modal";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { regSchema as schema } from "../../data/schema";
// import { registrationUserRequest } from "../../api";              // for fake DB
import { Preload } from "../../components/Preload/Preload";
import { useEffect, useState } from "react";
import { Button } from "../../components/buttons/Button/Button";
import { Form } from "../../components/Form/Form";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Input } from "../../components/Input/Input";
import { useDispatch } from "react-redux";
import { currentUserActions } from "../../store/currentUser/actionTypes";
import { useFakeAPI } from "../../customHooks/useFakeAPI";

export const Registration = () => {
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
      mode: "onBlur",
   })
   const [preload, setPreload] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { fakeRegistration } = useFakeAPI();                             //  for fake DB

   useEffect(() => {
      setPreload(false)
   }, []);

   const sendForm = (userRegData) => {
      reset();
      setPreload(true);
      // try {                                                       //---
      //    await registrationUserRequest(JSON.stringify(event));    //---
      //    navigate(`/confirm/User ${event.login} was created!`)    //---
      // } catch (promise) {                                         // for fake DB
      //    const errorMessage = promise.response.data               //---
      //    navigate(`/error/${errorMessage}`)                       //---
      // }                                                           //---
      const responseId = fakeRegistration(userRegData);
      console.log('Registration response: ', responseId);
      
      dispatch(currentUserActions.setCurrentUser(responseId));
      navigate('/login');
   }

   const buttons = [
      <Button onClick={() => navigate("/login")} key="navigate">
         To Login Form
      </Button>,
      <Button type="submit" key="submit">SEND</Button>
   ]

   return (
      <Modal>
         {preload
            ? <Preload/>
            : <Form title="REGISTRATION" onSubmit={handleSubmit(sendForm)} buttons={buttons}>

               <InputWrapper 
                  fieldName="Login"
                  error={!!errors.login?.message ? errors.login?.message : " "}
               >
                  <Input {...register('login')}/>
               </InputWrapper>

               <InputWrapper 
                  fieldName="Email"
                  error={!!errors.email?.message ? errors.email?.message : " "}
               >
                  <Input {...register('email')}/>
               </InputWrapper>

               <InputWrapper 
                  fieldName="Password"
                  error={!!errors.password?.message ? errors.password?.message : " "}
               >
                  <Input {...register('password')}/>
               </InputWrapper>

            </Form>
         }
      </Modal>
   )
}
