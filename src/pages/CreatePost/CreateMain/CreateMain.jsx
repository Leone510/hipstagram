import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../../../components/buttons/Button/Button";
import { FileInput } from "../../../components/FileInput/FileInput";
import { Form } from "../../../components/Form/Form";
import { Input } from "../../../components/Input/Input";
import { InputWrapper } from "../../../components/InputWrapper/InputWrapper";
import { PostImageWrapper } from "../../../components/PostImgWrapper/PostImgWrapper";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { createPostSchema as schema } from "../../../data/schema";
import { createPostThunk } from "../../../store/thunks/createPostThunk";
import styles from "./CreateMain.module.scss";

export const CreateMain = () => {
   const dispatch = useDispatch();
   const {register, control, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
   })

   const ref = useRef(null);

   const sendForm = async (data) => {
      console.log("incoming data :", data.image[0]);

      // const formData = new FormData(ref.current) 
      const formData = new FormData() 

      formData.append("title", data.title);
      formData.append("image", data.image[0], data.image[0].name);
      
      // const formData = {
      //    title: data.title,
      //    image: data.image[0]
      // }

      // const formData = new FormData()
      // formData.append("title", data.title)

      // console.log('Before thunk :', formData.get("title"));
      // console.log('Before thunk :', formData.get("image"));
      // console.log('Before thunk :', formData.keys());
      

      await dispatch(createPostThunk(formData));
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
                        defaultImage="data:image/jpeg;base64,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"
                        // error={!!errors.postName?.message ? errors.postName?.message : " "}
                     />
                  </PostImageWrapper>
               </Form>
            </div>
         </WrapperContainer>
      </div>
   )
}