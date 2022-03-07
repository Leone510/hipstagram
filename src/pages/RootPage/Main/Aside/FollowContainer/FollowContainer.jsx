import { useState } from "react";
import styles from "./FollowContainer.module.scss";
import { Followewrs } from "./Followers/Followers";
import { Following } from "./Following/Following";

export const FollowContainer = () => {
   const [activeFollowers, setActiveFollowers] = useState(true);

   return (
      <div className={styles.follow}>
         <Followewrs 
            active={activeFollowers}
            setActive={setActiveFollowers}
         />
         <Following
            active={activeFollowers}
            setActive={setActiveFollowers}
         />
      </div>
   )
}