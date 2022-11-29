const actionTypes = {
   // GET_CURRENT_USER: 'GET_CURRENT_USER',
   SET_CURRENT_USER: 'SET_CURRENT_USER',
   CREATE_POST: 'CREATE_POST',
}

export const currentUserActions = {
   setCurrentUser: (payload) => ({type: actionTypes.SET_CURRENT_USER, payload}),
   createPost: (payload) => ({type: actionTypes.CREATE_POST, payload}),
}