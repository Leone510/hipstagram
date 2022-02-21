import * as yup from 'yup';

export const schema = yup.object().shape({
      login: yup
               .string()
               .strict(true)
               .required('Login is required...')
               .matches(/[a-zA-Z]/, 'Login can only contain Latin letters.'),
      email: yup
               .string()
               .email()
               .required('Email is required...'),
      password: yup
               .string()
               .required('Password is required...') 
               .min(8, 'Password is too short - should be 8 chars minimum.')
               .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      confirm: yup
               .string()
               .required('No password provided.') 
               .min(8, 'Password is too short - should be 8 chars minimum.')
               .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})
