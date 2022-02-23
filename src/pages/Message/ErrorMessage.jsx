import { Message } from "../../components/Message/Message"
import { Modal } from "../../components/Modal/Modal"

export const ErrorMessage = (props) => {

   return (
      <Modal >
         <Message error title="ERROR" {...props}/>
      </Modal>
   )
}