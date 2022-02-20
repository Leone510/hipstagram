import { Form } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";

export const Registration = () => {

   const buttons = [
      <Button key="toLogin" href="#">To Login Form</Button>,
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