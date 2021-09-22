import { AuthModal, Logo } from "../../../../components";
import { ButtonContainer, InputContainer } from "../../../../containers";

export const CreatePassword = () => {
  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img src={"/assets/svg/close.svg"} alt={""} />
      </AuthModal.HeaderContainer>

      <AuthModal.Content>
        <main>
          <h1>Reset Password</h1>
          <p>
            Create your new password for Centerpocket and type new password
            twice.
          </p>
        </main>

        <div>
          <section style={{ width: "100%" }}>
            <InputContainer
              label={"New Password"}
              placeHolder={"Enter your new password"}
            />
            <br />
            <br />
            <InputContainer
              label={"Confirm New Password"}
              placeHolder={"Confirm your new password"}
            />
          </section>
          <br/>
          <ButtonContainer width={"100%"}>Reset Password</ButtonContainer>
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};
