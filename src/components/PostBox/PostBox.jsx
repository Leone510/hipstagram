import { ImageBox } from "../ImageBox/ImageBox";
import styles from "./PostBox.module.scss";

export const PostBox = ({imgUrl}) => {

   // const chekingImgUrl = async () => {
   //    try {
   //       await 
   //    }
   // }

   return (
      <div className={styles.post}>
         {/* <div className={styles.post_imgWrapper}>

         </div> */}
         <ImageBox imgSrc={imgUrl}/>
      </div>
   )
}