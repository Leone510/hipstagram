import { useState } from "react";
import styles from "./MainUser.module.scss";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { PostsList } from "../../../components/PostsList/PostsList";
import { MainHead } from "./MainHead/MainHead";
import { UserFollow } from "./UserFollow/UserFollow";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUserThunk } from "../../../store/thunks/currentUserThunk";

export const MainUser = () => {
   const [mainBox, setMainBox] = useState("posts");
   const { currentUser, auth} = useSelector(store => store);
   const dispatch = useDispatch();

   useEffect(() => {
      if (currentUser.id === null) {
         dispatch(currentUserThunk(auth.token))
      } 
   }, [auth.token, currentUser.id, dispatch])

   const toRender = {
      posts:   <PostsList posts={currentUser.posts}/>,
      follow:  <UserFollow 
                  followers={currentUser.followers} 
                  following={currentUser.following}
               />,
   }

   return (
      <main className={styles.main}>
         <WrapperContainer>
            <div className={styles.mainBox}>
               <MainHead 
                  setBody={setMainBox} 
                  innerBody={mainBox}
                  {...currentUser}
               />
               
               {toRender[mainBox]}

            </div>
         </WrapperContainer>
      </main>
   )
}