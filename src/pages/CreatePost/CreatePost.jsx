import styles from "./CreatePost.module.scss";
import { Header } from "../../components/Header/Header";
import { CreateMain } from "./CreateMain/CreateMain";

export const CreatePost = () => {

   return (
      <div className={styles.create}>
         <Header page={"create"}/>
         <CreateMain/>
      </div>
   )
}