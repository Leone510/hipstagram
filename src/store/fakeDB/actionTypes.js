const actionTypes = {
   CHANGE_USER_DATA: 'CHANGE_USER_DATA',
   ADD_POST: 'ADD_POST',
}

export const fakeDBActions = {
   changeUserData: (payload) => ({type: actionTypes.CHANGE_USER_DATA, payload}),
   addPost: (payload) => ({type: actionTypes.ADD_POST, payload}),
}