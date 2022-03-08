import { useState } from "react";
import styles from "./FollowContainer.module.scss";
import { Followers } from "./Followers/Followers";
import { Following } from "./Following/Following";

export const FollowContainer = () => {
   const [activeFollowers, setActiveFollowers] = useState(true);

   return (
      <div className={styles.follow}>
         <Followers 
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