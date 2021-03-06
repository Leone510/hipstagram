import { useSelector } from "react-redux";
import styles from "./MainHead.module.scss";
import { Button } from "../../../../components/buttons/Button/Button";
import { SmallButton } from "../../../../components/buttons/SmallButton/SmallButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { BsPencilSquare } from 'react-icons/bs';
import { AvatarBox } from "../../../../components/AvatarBox/AvatarBox";

export const MainHead = ({innerBody}) => {
   const navigate = useNavigate();
   const {
      avatar, 
      firstName, 
      lastName, 
      login, 
   } = useSelector(store => store.currentUser);

   useEffect(() => {
      if (login === null) navigate("/rootPage");
   }, [])

   const validateAvatar = !!avatar
      ? avatar
      : process.env.PUBLIC_URL + "/img/avatarPlaceholder.png"

   const validateName = !!firstName ? firstName : "unset";
   const validateSurname = !!lastName ? lastName : "unset";


   return (
      <div className={styles.head}>
         <AvatarBox imgSrc={validateAvatar}/>

         <div className={styles.userInfo}>
            <div className={styles.titleBox}>
               <h1 className={styles.title}>Nickname: {login}</h1>
               <SmallButton onClick={() => navigate("/setUser")}>
                  <BsPencilSquare size="1.5rem" color="aqua"/>
               </SmallButton>
            </div>

            <div className={styles.nameSurname}>
               <h2>First Name: {validateName}<br/>Last Name: {validateSurname}</h2>
            </div>

            <div className={styles.buttons}>
               <Button active={innerBody === "posts"}>
                  Posts
               </Button>
               <Button active={innerBody === "follow"}>
                  Followers
               </Button>
            </div>
         </div>
      </div>
   )
}