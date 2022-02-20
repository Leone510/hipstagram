import { Form } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router";

export const Login = () => {
   const navigate = useNavigate();

   const buttons = [
      <Button onClick={() => navigate("/registration")} key="toRegistration">
         To Registration Form
      </Button>,
      <Button key="send" href="#">SEND</Button>
   ]

   return (
      <Modal>
         <Form page='login' buttons={buttons}>
            {[
               "Login",
               "Password"
            ]}
         </Form>
      </Modal>
   )
}