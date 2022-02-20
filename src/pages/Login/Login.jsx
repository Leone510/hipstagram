import { Form } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";

export const Login = () => {

   const buttons = [
      <Button key="toRegistration" href="#">To Registration Form</Button>,
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