import * as yup from "yup";

export const targetPocketSchema = yup.object({
    plan_type: yup.string().required(),
  duration: yup
    .number()
    .test("duration", "duration must be valid number of months", (value) => {
      if (value === ""||value===undefined) return true;
      else if (isNaN(value)) return false;
      else if (value > 0) return true;
      else return false;
    }),
  amount: yup
    .string()
    .required()
    .test("amount", "amount must be valid", (value) => {
      const num = value?value.replace(",", ""):value;
      if (isNaN(num)) return false;
      else if (num > 0) return true;
      else return false;
    }),
  interest: yup.string().required(),
    mode: yup.string().required(),
    start: yup.date().required(),
    end: yup.date().required() ,
});
