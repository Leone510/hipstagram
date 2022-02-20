import { Button } from "../../components/Button/Button"
import { Message } from "../../components/Message/Message"
import { Modal } from "../../components/Modal/Modal"

export const ConfirmMessage = ({href, message}) => {

   const buttons = [
      <Button href="#">Ok</Button>,
   ]

   return (
      <Modal >
         <Message title="confirm" buttons={buttons}>
            {message}
         </Message>
      </Modal>
   )
}