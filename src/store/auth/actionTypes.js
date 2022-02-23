const actionTypes = {
   LOGIN: 'LOGIN',
   LOGOUT: 'LOGOUT',
}

export const authActions = {
   login: (payload) => ({type: actionTypes.LOGIN, payload}),
   logout: () => ({type: actionTypes.LOGOUT}),
}