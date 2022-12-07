const initialState = {
   token: localStorage.getItem('hipstagramToken') !== null 
      ? localStorage.getItem('hipstagramToken') 
      : null,
}

const storeControl = {
   LOGIN: (state, payload) => {
      return {
         ...state,
         token: payload,
      }
   },

   LOGOUT: (state) => {
      return {
         ...state,
         token: null,
      }
   },

   FAKE_LOGIN: (state, payload) => {            //---
      return {                                  //---
         ...state,                              //---
         token: payload                         //   for fake DB
      }                                         //---
   },                                           //---
}

const reducer = (state = initialState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;

