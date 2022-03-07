import { useState } from "react";
import styles from "./Followers.module.scss";

export const Followewrs = ({active, setActive}) => {

   const handleSetActive = () => {
      setActive(true);
   }

   return (
      <div className={
         active
            ? [styles.followers, styles.active].join(' ')
            : styles.followers
      }>
         <div className={styles.title} onClick={handleSetActive}>
            <p>Followers</p>
         </div>
      </div>
   )
}