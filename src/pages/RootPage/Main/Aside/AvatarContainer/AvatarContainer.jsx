import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AvatarImageWrapper } from "../../../../../components/AvatarImageWrapper/AvatarImageWrapper";
import { ImageBox } from "../../../../../components/ImageBox/ImageBox";
import { Preload } from "../../../../../components/Preload/Preload";
import { useFakeAPI } from "../../../../../customHooks/useFakeAPI";
import styles from "./AvatarContainer.module.scss";

export const AvatarContainer = () => {
   const [ userData, setUserData ] = useState({preload: true});
   const { token } = useSelector(store => store.auth);
   const navigate = useNavigate();
   const { getCurrentUser } = useFakeAPI();

   const getUserData = () => {
      const currentUser = getCurrentUser(token);
      setUserData({
         preload: false,
         ...currentUser,
      });
   }

   const toUserPage = () => {
      navigate("/userPage");
   }

   useEffect(() => {
      getUserData();
   }, []);

   const nameSurname = (name, surname) => {
      const validateName = !!name ? name : " ";
      const validateSurname = !!surname ? surname : " ";
      return `${validateName} ${validateSurname}`;
   }

   const validateAvatar = !!userData.avatar
      ? userData.avatar
      : process.env.PUBLIC_URL + "/img/avatarPlaceholder.png"

   return (
      userData.preload 
         ?  <Preload/>
         :  <div className={styles.avatarContainer}>
               <h2 className={styles.nickname}>{userData.login}</h2>
               <p className={styles.name}>{nameSurname(userData.firstName, userData.lastName)}</p>
               <AvatarImageWrapper>
                  <ImageBox onClick={toUserPage} imgSrc={validateAvatar}/>
               </AvatarImageWrapper>
            </div>
   )
}