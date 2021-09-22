import { useState } from "react";
import { AuthModal, Logo } from "../../../../components";
import { ButtonContainer, InputContainer } from "../../../../containers";

export const ResetPassword = () => {
  const [state, setState] = useState("email");

  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img src={"/assets/svg/close.svg"} alt={""} />
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
                placeHolder={"Enter Email Address"}
              />
            ) : (
              <InputContainer
                label={"Password"}
                placeHolder={"Enter Password"}
              />
            )}
          </section>
          <br/>
          <ButtonContainer width={"100%"}>Reset Password</ButtonContainer>

          {state === "email" ? (
            <p>
              Can’t use email?
              <span>Use Phone Number</span>
            </p>
          ) : (
            <p>
              Can’t use phone number? <span>Use Email Address</span>
            </p>
          )}
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};
