import { useNavigate, useParams } from "react-router";
import { Button } from "../buttons/Button/Button";
import styles from "./Message.module.scss";

export const Message = ({title, error, path}) => {
   const {authMessage} = useParams();
   const navigate = useNavigate();

   return (
      <div className={styles.box}>
         {error 
            ? <h1 className={styles.title_red}>{title}</h1>
            : <h1 className={styles.title_green}>{title}</h1>
         }
         
         <div className={styles.body}>
            <h2 className={styles.message}>
               {authMessage}
            </h2>
         </div>

         <div className={styles.buttons}>
            <Button onClick={() => navigate("/login")} type="button">Ok</Button>
         </div>
      </div>
   )
}