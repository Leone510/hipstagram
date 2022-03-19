import { useSelector } from "react-redux";
import styles from "./MainHead.module.scss";
import { Button } from "../../../../components/buttons/Button/Button";
import { SmallButton } from "../../../../components/buttons/SmallButton/SmallButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { BsPencilSquare } from 'react-icons/bs';

export const MainHead = ({innerBody}) => {
   const navigate = useNavigate();
   const {
      avatar, 
      name, 
      surname, 
      login, 
   } = useSelector(store => store.currentUser);

   useEffect(() => {
      if (login === null) navigate("/rootPage");
   }, [])

   const validateAvatar = !!avatar
      ? avatar
      : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"

   const validateName = !!name ? name : " ";
   const validateSurname = !!surname ? surname : " ";


   return (
      <div className={styles.head}>
         <div className={styles.avatarBox}>
            <img className={styles.img} src={validateAvatar} alt="avatar" />
         </div>

         <div className={styles.userInfo}>
            <div className={styles.title}>
               <h1>Nickname: {login}</h1>
               <SmallButton onClick={() => navigate("/setUser")}>
                  <BsPencilSquare size="1.5rem" color="aqua"/>
               </SmallButton>
            </div>

            <div className={styles.nameSurname}>
               <h2>First Name: Test<br/>Last Name: Test</h2>
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