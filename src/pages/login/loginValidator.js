import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
