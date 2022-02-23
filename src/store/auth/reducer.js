const initialState = {
   isAuth: false,
   token: null,
}

const storeControl = {
   LOGIN: (state, payload) => {
      console.log('reducer: ', payload);
      
      return {
         ...state,
         isAuth: true,
         token: payload,
      }
   },
   LOGOUT: (state) => {
      return {
         ...state,
         isAuth: false,
         token: null,
      }
   },
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

