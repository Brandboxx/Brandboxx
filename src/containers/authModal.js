import { ButtonContainer, InputContainer } from ".";
import { AuthModal, Logo, CodeInput } from "../components";

const AuthModalContainer = ({
  header,
  text,
  label,
  placeHolder,
  toggleModal,
  clickToSwitch,
  switchTo,
  handleClick,
}) => {
  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img onClick={toggleModal} src={"/assets/svg/close.svg"} alt={""} />
      </AuthModal.HeaderContainer>

      <AuthModal.Content>
        <main>
          <h1>{header}</h1>
          <p>{text}</p>
        </main>
        <div>
          <section style={{ width: "100%" }}>
            {switchTo === "email" || switchTo === "phoneNumber" ? (
              <InputContainer label={label} placeHolder={placeHolder} />
            ) : switchTo === "verification" ? (
              <CodeInput number={4} />
            ) : switchTo === "reset" ? (
              <>
                <InputContainer
                  label={"New Password"}
                  placeHolder={"Enter your new password"}
                />
                <br /><br/>
                <InputContainer
                  label={"Confirm New Password"}
                  placeHolder={"Confirm your new password"}
                />
              </>
            ) : (
              <></>
            )}
          </section>
          <br />
          <br />
          <ButtonContainer onClick={handleClick} width={"100%"}>
            {switchTo === "email" || switchTo === "phoneNumber"
              ? "Reset password"
              : switchTo === "verified"
              ? "Send"
              : "Reset password"}
          </ButtonContainer>

          {switchTo === "email" ? (
            <p>
              Can’t use email?{" "}
              <span onClick={clickToSwitch}>Use Phone Number</span>
            </p>
          ) : switchTo === "phoneNumber" ? (
            <p>
              Can’t use phone number?{" "}
              <span onClick={clickToSwitch}>Use Email Address</span>
            </p>
          ) : switchTo === "verification" ? (
            <p>
              Havn’t gotten an code?
              <span onClick={clickToSwitch}> Re-send Code</span>
            </p>
          ) : (
            <></>
          )}
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};

export { AuthModalContainer };
