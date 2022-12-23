import { ImageBox } from "../ImageBox/ImageBox";
import styles from "./PostBox.module.scss";

export const PostBox = ({image}) => {

   const getSrcForImage = (possibeImage) => {
      const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

      if (possibeImage instanceof Blob) {

         if (allowedFileTypes.includes(possibeImage.type)) {
            return URL.createObjectURL(possibeImage);
         } else {
            console.warn('file is not Image!');
            return process.env.PUBLIC_URL + "/img/avatarPlaceholder.png";
         }

      } else console.warn("Its not a Blob");
   }

   return (
      <div className={styles.post}>
         {/* <div className={styles.post_imgWrapper}>

         </div> */}
         <ImageBox imgSrc={getSrcForImage(image)}/>
      </div>
   )
}