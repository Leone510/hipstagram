import style from "./FileInput.module.scss";
import { Controller } from "react-hook-form";
import Dropzone from 'react-dropzone';

export const FileInput = ({control, name}) => {

   return (
      <Controller
         control={control}
         name={name}
         defaultValue={[]}
         render= {({field: {onChange, onBlur, value} }) => <>
            <Dropzone onDrop={(e) => onChange(e)}>
               {
                  ({ getRootProps, getInputProps}) => (
                     <div className={style.dropField} {...getRootProps()}>
                        <input {...getInputProps()} name={name} onBlur={onBlur}/>
                        <p>Drag 'n' drop files here, or click to select file</p>
                     </div>
                  )
               }
            </Dropzone>
            <>
               <p>
                  {value[0].name}
               </p>
            </>
         </>}
      />
   )
}