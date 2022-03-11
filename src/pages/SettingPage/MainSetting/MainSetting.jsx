import { useState } from "react";
import styles from "./MainSetting.module.scss";
import { WrapperContainer } from "../../../components/WrapperContainer/WrapperContainer";
import { PostsList } from "../../../components/PostsList/PostsList";
import { MainHead } from "./MainHead/MainHead";

export const MainSetting = () => {
   const [mainBox, setMainBox] = useState("posts");
   const toRender = {
      posts: <PostsList posts={null}/>,
      follow: "toDo",
   }

   return (
      <main className={styles.main}>
         <WrapperContainer>
            <div className={styles.mainBox}>
               <MainHead innerBody={mainBox}/>
               {toRender[mainBox]}
            </div>
         </WrapperContainer>
      </main>
   )
}