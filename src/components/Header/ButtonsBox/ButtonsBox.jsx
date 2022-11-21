import styles from "./ButtonsBox.module.scss";
import { SmallButton } from "../../buttons/SmallButton/SmallButton";
import { UseLogout } from "../../../customHooks/UseLogout";
import { IoMdPower } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineCreateNewFolder, MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router";

export const ButtonsBox = ({page}) => {
   const logout = UseLogout();
   const navigate = useNavigate();

   const toHome = () => {
      navigate('/rootPage');
   }
   const toUser = () => {
      navigate('/userPage');
   }
   const toCreate = () => {
      navigate('/createPost');
   }

   return (
      <div className={styles.buttonsBox}>
         <SmallButton onClick={toHome} active={page === "home"}>
            <HiOutlineHome color="aqua" size="1.5rem"/>
         </SmallButton>

         <SmallButton onClick={toCreate} active={page === "create"}>
            <MdOutlineCreateNewFolder color="aqua" size="1.5rem"/>
         </SmallButton>

         <SmallButton onClick={toUser} active={page === "user"}>
            <MdAccountCircle color="aqua" size="1.5rem"/>
         </SmallButton>

         <SmallButton onClick={logout}>
            <IoMdPower color="purple" size="1.5rem"/>
         </SmallButton>
      </div>
   )
}