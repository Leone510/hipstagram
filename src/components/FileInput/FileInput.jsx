import styles from "./FileInput.module.scss";
import { Controller } from "react-hook-form";
import Dropzone from 'react-dropzone';
import { ImageBox } from "../ImageBox/ImageBox";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useState } from "react";

export const FileInput = ({control, name, defaultImage}) => {
   const [preview, setPreview] = useState(defaultImage);

   const showFile = (data) => {
      if (typeof data === "string") {
         setPreview(data);
      } else if (data.length > 0) {

         const reader = new FileReader();
         reader.readAsDataURL(data[0]);
         reader.onload = () => {
            setPreview(reader.result);
         }
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
                        {showFile(value)}
                        <input {...getInputProps()} onBlur={onBlur}/>
                        
                        <ImageBox imgSrc={preview}>
                           <div className={styles.btn}>
                              <MdOutlineAddAPhoto size="5rem"/>
                           </div>
                        </ImageBox>
                     </div>
                  )
               }
            </Dropzone>

         </>}
      />
   )
}