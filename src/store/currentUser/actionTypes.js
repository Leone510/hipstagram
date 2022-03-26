const actionTypes = {
   // GET_CURRENT_USER: 'GET_CURRENT_USER',
   SET_CURRENT_USER: 'SET_CURRENT_USER',
}

export const currentUserActions = {
   setCurrentUser: (payload) => ({type: actionTypes.SET_CURRENT_USER, payload}),
}