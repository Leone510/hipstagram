import { createPost } from "../../api"

export const createPostThunk = (data) => {
   return async () => {

      try {
         const createdPost = await createPost(data);
      } catch (arr) {

      }
   }
}