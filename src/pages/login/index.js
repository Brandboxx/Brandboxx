import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { usePostRequest } from "../../api/useRequestProcessor";
import { VerificationComponent } from "../../components";

import {
  InputContainer,
  ButtonContainer,
  AuthModalContainer,
} from "../../containers";
import { IS_AUTHENTICATED, USER_DETAILS } from "../../reduxSetup/constant";
import { AuthLayout } from "../layout";
import { FormContainer, Terms, AuthLink } from "../signup/style";
import { loginValidator } from "./loginValidator";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { mutate: login } = usePostRequest("/users/login", "login");
  const [modal, setModal] = useState(false);

  const [switchModal, setSwitchModal] = useState("email");

  const handleOnSubmit = (values, actions) => {
    login(values, {
      onSuccess: (response) => {
        actions.resetForm();
        dispatch({ type: USER_DETAILS, payload: response.user_data });
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        history.replace("/dashboard");
      },
    });
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidator,
    onSubmit: handleOnSubmit,
  });

  const toggleModal = () => {
    setModal(!modal);
    setSwitchModal("email");
  };

  //switching modal states
  const handleEmailSwitch = () => {
    setSwitchModal("email");
  };

  const handlePhoneNumberSwitch = () => {
    setSwitchModal("phoneNumber");
  };

  const handleVerificationSwitch = () => {
    setSwitchModal("verification");
  };

  const handleResetPassword = () => {
    setSwitchModal("reset");
  };

  return (
    <>
      {modal ? (
        switchModal === "email" ? (
          <AuthModalContainer
            header={"Oh Wow! Forgot Password"}
            text={
              "Enter your email and we will send you 4 digits code for verification"
            }
            label={"Email"}
            placeHolder={"Enter your email address"}
            switchTo={switchModal}
            clickToSwitch={handlePhoneNumberSwitch}
            toggleModal={toggleModal}
            handleClick={handleVerificationSwitch}
          />
        ) : switchModal === "phoneNumber" ? (
          <AuthModalContainer
            header={"Oh Wow! Forgot Password"}
            text={
              "Enter your phone number and we will send you 4 digits code for verification"
            }
            label={"Phone Number"}
            placeHolder={"Enter your phone number"}
            switchTo={switchModal}
            clickToSwitch={handleEmailSwitch}
            toggleModal={toggleModal}
            handleClick={handleVerificationSwitch}
          />
        ) : switchModal === "verification" ? (
          <AuthModalContainer
            header={"Enter Verification Code"}
            text={
              "Enter your verification code that was sent through your e-mail or phone number."
            }
            label={"Phone Number"}
            placeHolder={"Enter your phone number"}
            switchTo={switchModal}
            clickToSwitch={handleEmailSwitch}
            toggleModal={toggleModal}
            handleClick={handleResetPassword}
            otp={[]}
            number={5}
          />
        ) : switchModal === "reset" ? (
          <AuthModalContainer
            header={"Reset Password"}
            text={
              "Create your new password for Centerpocket and type new password twice."
            }
            switchTo={switchModal}
            toggleModal={toggleModal}
          />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      <AuthLayout text={"Login"}>
        <div style={{ maxWidth: "768px", margin: "0px auto" }}>
          <FormContainer>
            <section>
              <InputContainer
                label={"Email Address"}
                errorText={errors.email}
                value={values.email}
                type={"email"}
                onChange={handleChange("email")}
                placeHolder={"Enter your email address"}
              />
            </section>
            <section>
              <InputContainer
                type="password"
                errorText={errors.password}
                value={values.password}
                onChange={handleChange("password")}
                label={"Password"}
                placeHolder={"Enter your secret number"}
              />
            </section>
            <aside style={{ height: "40px" }}></aside>
            <ButtonContainer
              onClick={handleSubmit}
              type={"submit"}
              width={"100%"}
            >
              Sign In
            </ButtonContainer>
          </FormContainer>
          <Terms>
            Forgot Password?{" "}
            <span style={{ color: "#149A9B" }} onClick={toggleModal}>
              Reset
            </span>
          </Terms>
          <AuthLink>
            Don’t have an account?
            <span onClick={() => history.push("/register")}> Sign up</span>
          </AuthLink>
        </div>
      </AuthLayout>
    </>
  );
};

export { Login };
