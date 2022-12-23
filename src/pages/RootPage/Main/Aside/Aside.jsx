import styles from "./Aside.module.scss";
import { AvatarContainer } from "./AvatarContainer/AvatarContainer";
import { FollowContainer } from "./FollowContainer/FollowContainer";

export const Aside = () => {

   return (
      <aside className={styles.aside}>
         <div className={styles.asideBox}>
            <AvatarContainer />
            <FollowContainer />
         </div>
      </aside>
   )
}

