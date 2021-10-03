import * as yup from "yup";

export const lockSchema = yup.object({
  title: yup.string().required(),
  duration: yup
    .number()
    .test("duration", "duration must be valid number of months", (value) => {
      if (value === "" || value === undefined) return true;
      else if (isNaN(value)) return false;
      else if (value > 0) return true;
      else return false;
    }),
  amount: yup
    .string()
    .required()
    .test("amount", "amount must be greater than 200", (value) => {
      const num = value ? value.replace(",", "") : value;
      if (isNaN(num)) return false;
      else if (num > 200) return true;
      else return false;
    }),
  payment_mtd: yup.string().required()
});
