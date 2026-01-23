import * as yup from 'yup';


export const useUpdateProfileInfoSchema = yup.object({
  fullName:yup.string().required("FullName is Required")
  .matches(/[A-Z]/, "Full Name Should contain at least one uppercase letter")
  .matches(/[a-z]/, "Full Name Should contain at least one lowercase letter")
  .matches(/[\s]/, "Full Name Should at least has one whitespace character "),
  city:yup.string().required("City Name is Required")
  .min(2, "City Name should have at least 2 Characters"),
  phoneNumber:yup.string().required("PhoneNumber is Requierd")
  .matches(/[\d{10,}]/, 'Phone Number Should Be an 10 Digits Number'),
})