import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AvatarBox } from "../../../../../components/AvatarBox/AvatarBox";
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
      : process.env.PUBLIC_URL + "/img/avatarPlaceholder.png"

   return (
      <div className={styles.avatarContainer}>
         <h2 className={styles.nickname}>{login}</h2>
         <p className={styles.name}>{nameSurname(name, surname)}</p>
         <AvatarBox onClick={toSetting} imgSrc={validateAvatar}/>
      </div>
   )
}