import styles from "./FileInput.module.scss";
import { Controller } from "react-hook-form";
import Dropzone from 'react-dropzone';
import { AvatarBox } from "../AvatarBox/AvatarBox";
import { MdOutlineAddAPhoto } from "react-icons/md";

export const FileInput = ({control, name}) => {

   const validateAvatar = (avatarSrc) => {
      if (Array.isArray(avatarSrc)) {
         return (
            process.env.PUBLIC_URL + `/img/${avatarSrc[0].path}`
         )
      } else {
         const srcArr = avatarSrc.split("/")
         return (
            srcArr[1] = "hipstagram"
               ? process.env.PUBLIC_URL + "/" + srcArr.slice(2).join("/")
               : process.env.PUBLIC_URL + "/img/avatar.png"
         )
      }
   }

   return (
      <Controller
         control={control}
         name={name}
         defaultValue={[]}
         render= {({field: {onChange, onBlur, value} }) => <>
         
            <Dropzone onDrop={(e) => onChange(e)}>
               {
                  ({ getRootProps, getInputProps}) => (
                     <div className={styles.dropZone} {...getRootProps()}>
                        <input {...getInputProps()} name={name} onBlur={onBlur}/>
                        <AvatarBox imgSrc={validateAvatar(value)}>
                           <div className={styles.btn}>
                              <MdOutlineAddAPhoto size="5rem"/>
                           </div>
                        </AvatarBox>
                     </div>
                  )
               }
            </Dropzone>

         </>}
      />
   )
}