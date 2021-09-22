import { useFormik } from "formik";
import { useState } from "react";
import { AuthModal, Logo } from "../../../../components";
import { ButtonContainer, InputContainer } from "../../../../containers";
import * as yup from "yup";
import { usePostRequest } from "../../../../api/useRequestProcessor";
import { toast } from "react-toastify";

export const ResetPassword = ({ setShow }) => {
  const [state, setState] = useState("email");
  const { mutate: forgotPasswordRequest } = usePostRequest(
    "/users/forgot-password-request",
    "password-request"
  );
  const handleOnSubmit = (values, actions) => {
    const payload = {};
    if (state === "email") {
      values.email === ""
        ? actions.setErrors({ email: "email is required" })
        : (payload.email = values.email);
    } else {
      values.phone === ""
        ? actions.setErrors({ phone: "phone number is required" })
        : (payload.phone_number = values.phone);
    }
    console.log({ payload });
    if (Object.keys(payload).length === 0) return;
    forgotPasswordRequest(payload, {
      onSuccess: (data) => {
        console.log(data);
        toast(data.message);
        setShow((prev) => ({ ...prev, reset: false, verification: true }));
      },
    });
  };
  const { values, handleChange, resetForm, errors, handleSubmit } = useFormik({
    initialValues: { email: "", phone: "" },
    onSubmit: handleOnSubmit,
    validationSchema: yup.object({
      email: yup.string().email(),
      phone: yup
        .string()
        .test(
          "phone",
          "invalid number",
          (number) =>
            /^0[0-9]{10}$|^\+234[0-9]{10}$/.test(number) || state === "email"
        ),
    }),
  });
  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img
          onClick={() => () => setShow((prev) => ({ ...prev, reset: false }))}
          src={"/assets/svg/close.svg"}
          alt={""}
        />
      </AuthModal.HeaderContainer>

      <AuthModal.Content>
        <main>
          <h1>Oh Wow! Forgot Password</h1>
          <p>
            Enter your email and we will send you 4 digits code for verification
          </p>
        </main>

        <div>
          <section style={{ width: "100%" }}>
            {state === "email" ? (
              <InputContainer
                label={"Email Address"}
                value={values.email}
                errorText={errors.email}
                onChange={handleChange("email")}
                placeHolder={"Enter Email Address"}
              />
            ) : (
              <InputContainer
                label={"Phone Number"}
                value={values.phone}
                onChange={handleChange("phone")}
                errorText={errors.phone}
                placeHolder={"Enter Phone Number"}
              />
            )}
          </section>
          <br />
          <ButtonContainer type="button" onClick={handleSubmit} width={"100%"}>
            Reset Password
          </ButtonContainer>

          {state === "email" ? (
            <p>
              Can’t use email?
              <span
                onClick={() => {
                  resetForm({ email: "", phone: "" });
                  setState("phone");
                }}
              >
                Use Phone Number
              </span>
            </p>
          ) : (
            <p>
              Can’t use phone number?{" "}
              <span
                onClick={() => {
                  resetForm({ email: "", phone: "" });
                  setState("email");
                }}
              >
                Use Email Address
              </span>
            </p>
          )}
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};
