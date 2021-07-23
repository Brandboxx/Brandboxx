import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import {
  InputContainer,
  ButtonContainer,
  AuthModalContainer,
} from "../../containers";
import { AuthLayout } from "../layout";

import { FormContainer, Terms, AuthLink } from "../signup/style";

const Login = () => {
  const history = useHistory();

  const [modal, setModal] = useState(false);

  const [switchModal, setSwitchModal] = useState("email"); // options: email, phoneNumber, verification

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
          />
        ) : switchModal === "reset" ? (
          <AuthModalContainer
            header={"Reset Password"}
            text={
              "Create your new password for Centerpocket and type new password twice."
            }
            // label={"Phone Number"}
            // placeHolder={"Enter your phone number"}
            switchTo={switchModal}
            // clickToSwitch={handleEmailSwitch}
            toggleModal={toggleModal}
            // handleClick={handleResetPassword}
          />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      <AuthLayout text={"Login"}>
        <div>
          <FormContainer>
            <section>
              <InputContainer
                label={"Email Address"}
                placeHolder={"Enter your email address"}
              />
            </section>
            <section>
              <InputContainer
                label={"Password"}
                placeHolder={"Enter your secret number"}
              />
            </section>
            <aside style={{ height: "40px" }}></aside>
            <ButtonContainer
              onClick={() => history.push("/dashboard")}
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
