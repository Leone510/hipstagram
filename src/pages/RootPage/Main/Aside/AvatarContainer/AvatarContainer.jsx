import styles from "./AvatarContainer.module.scss";

export const AvatarContainer = () => {

   return (
      <div className={styles.avatarContainer}>
         <h2 className={styles.nickname}>Nickname</h2>
         <p className={styles.name}>(Name surname)</p>
         <div className={styles.avatarBox}>
            <img className={styles.img} src="https://via.placeholder.com/500" alt="avatar" />
         </div>
      </div>
   )
}