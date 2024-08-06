import * as yup from 'yup';

// login validation
export const loginValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number") 
});


//register validation
export const registerValidation = yup.object().shape({
    name: yup.string().required("Name is required").trim(),
    email: yup.string().email().required("Email is required").trim(),
    password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
    fullName: yup.string().required("Full Name is required")
    .max(20, "Full Name must not exceed 20 characters")
    .matches(/^[a-zA-Z ]*$/, "Full Name must contain only letters") 
});