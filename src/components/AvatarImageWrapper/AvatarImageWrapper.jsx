import styles from "./AvatarImageWrapper.module.scss";

export const AvatarImageWrapper = ({children}) => {
   return (
      <div className={styles.avatarImageWrapper}>
         {children}
      </div>
   )
}