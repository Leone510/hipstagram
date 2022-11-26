import * as yup from 'yup';

export const loginSchema = yup.object().shape({
      login: yup
            .string()
            .strict(true)
            .required('Login is required...')
            .matches(/[a-zA-Z]/, 'Login can only contain Latin letters.'),
      password: yup
            .string()
            .required('Password is required...') 
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

export const regSchema = yup.object().shape({
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
})

export const rePassSchema = yup.object().shape({
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

export const setUserSchema = yup.object().shape({
      login: yup
            .string()
            .strict(true)
            .required('Login is required...')
            .matches(/[a-zA-Z]/, 'Login can only contain Latin letters.'),
      firstName: yup
            .string()
            .strict(true)
            .required('Name is required...')
            .matches(/[a-zA-Z]/, 'Name can only contain Latin letters.'),
      lastName: yup
            .string()
            .strict(true)
            .required('Surname is required...')
            .matches(/[a-zA-Z]/, 'Surname can only contain Latin letters.'),
      email: yup
            .string()
            .email()
            .required('Email is required...'),
})

export const createPostSchema = yup.object().shape({
      title: yup
            .string()
            .strict(true)
            .required('Post name is required...')
})