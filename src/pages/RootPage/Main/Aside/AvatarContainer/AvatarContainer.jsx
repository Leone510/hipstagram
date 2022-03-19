import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./AvatarContainer.module.scss";

export const AvatarContainer = () => {
   const {login, name, surname, avatar} = useSelector(store => store.currentUser);
   const navigate = useNavigate();

   const toSetting = () => {
      navigate("/userPage");
   }

   const nameSurname = (name, surname) => {
      const validateName = !!name ? name : " ";
      const validateSurname = !!surname ? surname : " ";
      return `${validateName} ${validateSurname}`;
   }

   const validateAvatar = !!avatar
      ? avatar
      : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"

   return (
      <div className={styles.avatarContainer}>
         <h2 className={styles.nickname}>{login}</h2>
         <p className={styles.name}>{nameSurname(name, surname)}</p>
         <div onClick={toSetting} className={styles.avatarBox}>
            <img className={styles.img} src={validateAvatar} alt="avatar" />
         </div>
      </div>
   )
}