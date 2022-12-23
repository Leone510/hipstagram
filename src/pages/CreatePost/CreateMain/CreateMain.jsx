import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import { Button } from "../../../components/buttons/Button/Button";
import { FileInput } from "../../../components/FileInput/FileInput";
import { Form } from "../../../components/Form/Form";
import { Input } from "../../../components/Input/Input";
import { InputWrapper } from "../../../components/InputWrapper/InputWrapper";
import { PostImageWrapper } from "../../../components/PostImgWrapper/PostImgWrapper";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { useFakeAPI } from "../../../customHooks/useFakeAPI";
import { useLogout } from "../../../customHooks/UseLogout";
import { createPostSchema as schema } from "../../../data/schema";
// import { createPostThunk } from "../../../store/thunks/createPostThunk";
import styles from "./CreateMain.module.scss";

export const CreateMain = () => {
   const { token } = useSelector(store => store.auth);
   const { user } = useSelector(store => store.fakeDB);
   const logout = useLogout();
   const navigate = useNavigate();
   // const dispatch = useDispatch();                                            // for fake BD
   // const navigate = useNavigate();                                            //---
   const { fakeCreatePost } = useFakeAPI();
   const {register, control, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
   })

   useEffect(() => {
      token === null && logout();
   })

   const ref = useRef(null);

   const sendForm = (data) => {
     
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("image", data.image[0], data.image[0].name);
   
      // console.log('Form data title: ', formData.get("title"));
      // console.log('Form data image: ', formData.get("image"));
      
      // dispatch(createPostThunk(formData));                                    // for fake BD
      // navigate("/userPage");                                                  //---

      fakeCreatePost(token, formData);
      navigate("/userPage");
   }

   const buttons = [
      <Button key="navigate">CLOSE</Button>,
      <Button type="submit" key="create">CREATE</Button>
   ]

   return (
      <div className={styles.main}>
         <WrapperContainer>
            <div className={styles.mainBox}>
               <Form
                  ref = {ref}
                  onSubmit={handleSubmit(sendForm)}
                  title="Create Post"
                  buttons={buttons}
               >
                  <InputWrapper
                     fieldName="Post title"
                     error={!!errors.title?.message ? errors.title?.message : " "}
                  >
                     <Input {...register('title')}/>
                  </InputWrapper>

                  <PostImageWrapper>
                     <FileInput 
                        name="image"
                        control={control}
                        defaultImage={process.env.PUBLIC_URL + "/img/zyroPostPlaceholder.png"}
                        // error={!!errors.postName?.message ? errors.postName?.message : " "}
                     />
                  </PostImageWrapper>
               </Form>
            </div>
         </WrapperContainer>
      </div>
   )
}