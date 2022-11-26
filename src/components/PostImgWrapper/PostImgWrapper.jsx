import styles from "./PostImgWrapper.module.scss";

export const PostImageWrapper = ({error, children}) => {
   return (
      <>
         <div className={styles.postImageWrapper}>
            {children}
         </div>

         <h5 className={styles.error}>
            {error}
         </h5>
      </>
   )
}