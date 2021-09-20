import * as yup from "yup";

export const signUpValidator = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  phone_number: yup
    .string()
    .required()
    .test("isValid", "invaild phone number", (value) =>
      /^0[0-9]{10}$|^\+234[0-9]{10}$/.test(value)
    ),
});
