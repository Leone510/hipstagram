const initialState = {
   user: {
      token: "trueTokenForLogin",
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      avatar: "",
      id: "",
      posts: [],
      followers: [],
      following: [],
   },
}

const storeControl = {
   REGISTRATION: (state, payload) => {
      return {
         ...state,
         user: {
            ...state.user,
            ...payload,
         }
      }
   },
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

