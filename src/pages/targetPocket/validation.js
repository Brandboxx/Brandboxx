import * as yup from "yup";
import { isToday } from "../../utils/dateUtils";

export const targetPocketSchema = yup.object({
  plan_type: yup.string().required("A title is required"),
  duration: yup.string().required(),
  // .test("duration", "duration must be valid number of months", (value) => {
  //   if (value === ""||value===undefined) return true;
  //   else if (isNaN(value)) return false;
  //   else if (value > 0) return true;
  //   else return false;
  // }),
  amount: yup
    .string()
    .required("amount is required")
    .test("amount", "amount must be a greater than 1000", (value) => {
      const num = value ? value.replace(",", "") : value;
      if (isNaN(num)) return false;
      else if (num > 1000) return true;
      else return false;
    }),
  interest: yup.string().required(),
  mode: yup.string().required("Payment Mode is required"),
  start: yup.date().required("A start date is required")
    .test("start", "start date is invalid", (value) => {
      if (!isToday(value) && new Date().getTime() > new Date(value).getTime()) return false;
      else return true;
    }),
  end: yup.date().required("An end date is required"),
  payment_mtd: yup.string().required("payment method is required")
});
