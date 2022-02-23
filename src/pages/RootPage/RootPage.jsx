import styles from "./RootPage.module.scss";
import { useDispatch } from "react-redux";
import { WrapperContainer } from "../../components/WrapperContainer/WrapperContainer";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { authActions } from "../../store/auth/actionTypes";

export const RootPage = ({token}) => {
   const dispatch = useDispatch();
   const handleLogout = () => {
      dispatch(authActions.logout())
   };

   return (
      <WrapperContainer className={styles.rootPage}>
         <h1>{token}</h1>
         <Button onClick={handleLogout}>To Login</Button>
      </WrapperContainer>
   )
}