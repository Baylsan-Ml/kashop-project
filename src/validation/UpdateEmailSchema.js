import * as yup from "yup"


export const UpdateEmailSchema = yup.object({
  CurrentEmail:yup.string().email("Invalid Email Format").required("Email is Required"),
  NewEmail:yup.string().email("Invalid Email Format").required("Email is Required"),
});