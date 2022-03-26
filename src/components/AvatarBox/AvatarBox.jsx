import styles from "./AvatarBox.module.scss";

export const AvatarBox = ({children, imgSrc}) => {

   return (
      <div className={styles.avatarBox}>
         <img className={styles.img} src={imgSrc} alt="avatar" />
         {children}
      </div>
   )
}