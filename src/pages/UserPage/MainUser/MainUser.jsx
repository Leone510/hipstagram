import styles from "./MainUser.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { PostsList } from "../../../components/PostsList/PostsList";
import { UserAside } from "./UserAside/UserAside";
import { UserFollow } from "./UserFollow/UserFollow";
import { useFakeAPI } from "../../../customHooks/useFakeAPI";
import { Preload } from "../../../components/Preload/Preload";
// import { currentUserThunk } from "../../../store/thunks/currentUserThunk"; // for fake DB

export const MainUser = () => {
   const [mainBox, setMainBox] = useState("posts");
   // const { currentUser, auth} = useSelector(store => store);
   const { token } = useSelector(store => store.auth);
   const [ userData, setUserData ] = useState({preload: true, posts: []});
   const { getCurrentUser } = useFakeAPI();
   // const dispatch = useDispatch();

   const getUserData = () => {
      const currentUser = getCurrentUser(token);
      setUserData({
         preload: false,
         ...currentUser,
      });
   }

   useEffect(() => {
      getUserData(token);
   }, []);

   const toRender = {
      posts:   <PostsList posts={userData.posts}/>,
      follow:  <UserFollow 
                  followers={userData.followers} 
                  following={userData.following}
               />,
   }

   return (
      userData.preload
         ?  <Preload/>
         :  <main className={styles.main}>
               <WrapperContainer>
                  <div className={styles.mainBox}>
                     <UserAside 
                        setBody={setMainBox} 
                        innerBody={mainBox}
                        {...userData}
                     />
                     
                     {toRender[mainBox]}

                  </div>
               </WrapperContainer>
            </main>
   )
}