const actionTypes = {
   GET_CURRENT_USER: 'GET_CURRENT_USER',
}

export const authActions = {
   getCurrentUser: (payload) => ({type: actionTypes.GET_CURRENT_USER, payload}),
}