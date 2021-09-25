import * as yup from "yup";

export const profileValidator = yup.object({
  firstname: yup.string().required("Required!"),
  lastname: yup.string().required("Required!"),
  date_of_birth: yup.string().required("Required!"),
  gender: yup.string().required("Required!"),
  address: yup.string().required("Required!"),
  email: yup.string().email("Input correct email").required("Required!"),
  phone_number: yup
    .string()
    .required()
    .test("isValid", "invaild phone number", (value) =>
      /^0[0-9]{10}$|^\+234[0-9]{10}$/.test(value)
    ),
});
