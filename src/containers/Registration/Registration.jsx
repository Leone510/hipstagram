import { Form } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router";

export const Registration = () => {
   const navigate = useNavigate();

   const buttons = [
      <Button onClick={() => navigate("/login")} key="toLogin">
         To Login Form
      </Button>,
      <Button key="send" href="#">SEND</Button>
   ]

   return (
      <Modal>
         <Form page='registration' buttons={buttons}>
            {[
               "Login",
               "Email",
               "Password"
            ]}
         </Form>
      </Modal>
   )
}