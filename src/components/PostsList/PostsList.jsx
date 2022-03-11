import styles from "./PostsList.module.scss";

export const PostsList = ({posts = null}) => {

   return (
      <div className={styles.postsList}>
         {posts === null
            ? <h1>Not posts yet</h1>
            : posts.map(post => {
               <h2>{post.name}</h2>
            })
         }
      </div>
   )
}