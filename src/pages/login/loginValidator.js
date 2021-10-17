import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required("Phone Number is required")
    .test("isValid", "Minimum of 8 characters", (value) => {
      if(value?.length < 8) return false;
      else return true
    }),
});

export const resetPasswordValidator = yup.object({
  new_password: yup.string().required('New password is required'),
  confirm_new_password: yup
    .string()
    .required('Confirm new password is required')
    .oneOf([yup.ref("new_password"), null], "Must match the new password"),
});
