const initialState = {
   user: {
      token: "trueTokenForLogin",
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: "",
      avatar: process.env.PUBLIC_URL + "/img/avatarPlaceholder.png",
      id: "",
      posts: [],
      followers: [],
      following: [],
   },
}

const storeControl = {
   CHANGE_USER_DATA: (state, payload) => {
      return {
         ...state,
         user: {
            ...state.user,
            ...payload,
         }
      }
   },

   ADD_POST: (state, payload) => {
      const newPostsArray = [];
      newPostsArray.unshift(payload, ...state.user.posts);

      return {
         ...state,
         user: {
            ...state.user,
            posts: newPostsArray,
         }
      }
   }

   
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

