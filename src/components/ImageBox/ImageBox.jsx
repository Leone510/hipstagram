import styles from "./ImageBox.module.scss";

export const ImageBox = ({children, imgSrc}) => {

   return (
      <div className={styles.ImageBox}>
         <img className={styles.img} src={imgSrc} alt="image" />
         {children}
      </div>
   )
}