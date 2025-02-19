import * as yup from 'yup'

export const loginUserSchema = yup.object({
    email: yup.string().email('Invalid Email').required('Please enter your email'),
    password: yup.string().min(5).required('Please enter a password')
    // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Confirm password')
})

export const registerUserSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Invalid Email').required('Please enter your email'),
    password: yup.string().min(5).required('Please enter a password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Confirm password')
})

export const ratingSchema = yup.object({
    title: yup.string().required('Rating Title'),
    desc: yup.string().required('Rating Description'),
    termsAccepted: yup.boolean().oneOf([true],'You need to accept the terms and conditions'),
})