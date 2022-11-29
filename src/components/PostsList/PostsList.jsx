import { PostBox } from "../PostBox/PostBox";
import styles from "./PostsList.module.scss";

export const PostsList = ({posts}) => {



   return (
      <div className={styles.postsList}>
         <div className={styles.postsList_container}>
            {posts.length === 0
               ? <h2>Not posts yet...</h2>
               : posts.map(post => <PostBox {...post}/>)
            }
         </div>
      </div>
   )
}