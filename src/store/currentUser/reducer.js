const initialState = {
   id: null,
   firstName: "",
   lastName: "",
   email: "",
   login: "",
   avatar: process.env.PUBLIC_URL + "/img/avatarPlaceholder.png",
   posts: null,
   followers: null,
   following: null,
   preload: true
}

const storeControl = {
   // GET_CURRENT_USER: (state, payload) => {

   //    const avatar = payload.avatar === ""
   //       ? process.env.PUBLIC_URL + "/img/avatarPlaceholder.png"
   //       : payload.avatar
      
   //    return {
   //       ...state,
   //       id: payload.id,
   //       firstName: payload.firstName,
   //       lastName: payload.lastName,
   //       email: payload.email,
   //       login: payload.login,
   //       avatar: avatar,
   //       posts: payload.posts,
   //       followers: payload.followers,
   //       following: payload.following,
   //       preload: false,
   //    }
   // },

   SET_CURRENT_USER: (state, payload) => {

      const avatar = (payload.avatar === "") || (payload.avatar === undefined)
         ? process.env.PUBLIC_URL + "/img/avatarPlaceholder.png"
         : payload.avatar
      
      return {
         ...state,
         ...payload,
         avatar: avatar,
         preload: false,
      }
   },

   CREATE_POST: (state, payload) => {
      const newPostsArr = [];

      newPostsArr.unshift(payload);

      return {
         ...state,
         posts : newPostsArr,
      }
   },
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

