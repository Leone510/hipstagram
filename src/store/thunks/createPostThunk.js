import { createPost } from "../../api"
import { currentUserActions } from "../currentUser/actionTypes";

export const createPostThunk = (data) => {

   // console.log('in thunk :', data);
   
   return async dispatch => {

      try {
         const createdPost = await createPost(data);
         dispatch(currentUserActions.createPost(createdPost));
      } catch (err) {
         console.log(err);
      }
   }
}