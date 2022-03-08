const actionTypes = {
   GET_CURRENT_USER: 'GET_CURRENT_USER',
}

export const currentUserActions = {
   getCurrentUser: (payload) => ({type: actionTypes.GET_CURRENT_USER, payload}),
}