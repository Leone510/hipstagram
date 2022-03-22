const initialState = {
   id: null,
   name: null,
   surname: null,
   email: null,
   login: null,
   avatar: '/img/avatarPlaceholder.png',
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
         name: payload.name,
         surname: payload.surname,
         email: payload.email,
         login: payload.login,
         avatar: payload.avatar,
         posts: payload.posts,
         followers: payload.followers,
         following: payload.following,
         preload: true,
      }
   },
   
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

