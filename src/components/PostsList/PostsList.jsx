import { ImageBox } from "../ImageBox/ImageBox";
import styles from "./PostsList.module.scss";

export const PostsList = ({posts}) => {

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
      <div className={styles.postsList}>
         <div className={styles.postsList_container}>
            {posts.length === 0 
               ? <h2>Not posts yet...</h2>
               :  posts.map((post) => {
                     return   <div className={styles.postBox} key={post.id}>
                                 <div className={styles.postBox_title}>
                                    <p>{post.title}</p>
                                 </div>
                                 <ImageBox imgSrc={URL.createObjectURL(post.image)} alt="" />
                              </div>
               })
            }
         </div>
      </div>
   )
}