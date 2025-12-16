import * as yup from 'yup';

export const SendCodeSchema = yup.object({
  email:yup.string().email("Enter a Valid Email").required("Email is Required"),
});