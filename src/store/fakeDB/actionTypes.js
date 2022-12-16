const actionTypes = {
   REGISTRATION: 'REGISTRATION',
}

export const fakeDBActions = {
   registration: (payload) => ({type: actionTypes.REGISTRATION, payload}),
}