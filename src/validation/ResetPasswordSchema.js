import * as yup from 'yup';


export const resetPasswordSchema=yup.object({
 newPassword:yup.string().required("Password is Required").min(8, "Password must be at least 8 Characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/\d/, "Password must contain at least one number")
  .matches(/[@!#$*&?]/, "Password must be at least one special Characters"),
  code:yup.string().required("Code is Required").min(4, "Code must be at least 4 Characters"),
    email:yup.string().email("Enter a Valid Email").required("Email is Required"),
})
 