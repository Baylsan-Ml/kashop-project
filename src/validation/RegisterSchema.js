import * as yup from 'yup';


export const RegiesterSchema = yup.object({
  fullName:yup.string().required("FullName is Required"),
  email:yup.string().email("Invalid Email Format").required("Email is Required"),
  userName:yup.string().matches(/^[a-zA-Z0-9._-]+$/, "Invalid UserName").min(4, "UserName must be at least 4 Characters")
  .required("UserName is Required"),
  phoneNumber:yup.string().required("PhoneNumber is Requierd"),
  password:yup.string().required("Password is Required").min(8, "Password must be at least 8 Characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/\d/, "Password must contain at least one number")
  .matches(/[@!#$*&?]/, "Password must be at least one special Characters"),
})