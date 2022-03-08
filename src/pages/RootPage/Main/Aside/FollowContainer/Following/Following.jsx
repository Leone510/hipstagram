import styles from "./Following.module.scss";

export const Following = ({active, setActive}) => {

   const handleSetActive = () => {
      setActive(false);
   }

   return (
      <div className={
         !active
            ? [styles.following, styles.active].join(' ')
            : styles.following
      }>
         <div className={styles.title} onClick={handleSetActive}>
            <p>Following</p>
         </div>
      </div>
   )
}