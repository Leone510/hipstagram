import { Message } from "../../components/Message/Message"
import { Modal } from "../../components/Modal/Modal"

export const ConfirmMessage = (props) => {

   return (
      <Modal >
         <Message title="MASSAGE" {...props}/>
      </Modal>
   )
}