const actionTypes = {
   LOGIN: 'LOGIN',
   LOGOUT: 'LOGOUT',
   FAKE_LOGIN: 'FAKE_LOGIN',
}

export const authActions = {
   login: (payload) => ({type: actionTypes.LOGIN, payload}),
   logout: () => ({type: actionTypes.LOGOUT}),
   fakeLogin: (payload) => ({type: actionTypes.FAKE_LOGIN, payload}),
}