const initialState = {
   id: null,
   name: "",
   surname: "",
   email: "",
   login: "",
   avatar: process.env.PUBLIC_URL + "/img/avatarPlaceholder.png",
   posts: null,
   followers: null,
   following: null,
   preload: true
}

const storeControl = {
   GET_CURRENT_USER: (state, payload) => {
      
      return {
         ...state,
         id: payload.id,
         name: payload.firstName,
         surname: payload.lastName,
         email: payload.email,
         login: payload.login,
         avatar: payload.avatar,
         posts: payload.posts,
         followers: payload.followers,
         following: payload.following,
         preload: false,
      }
   },
   
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

