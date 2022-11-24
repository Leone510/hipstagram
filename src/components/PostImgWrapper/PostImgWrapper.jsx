import styles from "./PostImgWrapper.module.scss";

export const PostImageWrapper = ({children}) => {
   return (
      <div className={styles.postImageWrapper}>
         {children}
      </div>
   )
}