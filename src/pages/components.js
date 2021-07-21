import { LandingNavigation } from "../components";
import { ButtonContainer, InputContainer } from "../containers";

const Components = () => {
  return (
    <>
      <div style={{ padding: "30px 100px" }}>
        {" "}
        <LandingNavigation />
        <br />
        <ButtonContainer width={"100px"}>Sign up</ButtonContainer>
        <br />
        <br />
        <ButtonContainer status={"alternate"} width={"100px"}>
          Log in
        </ButtonContainer>
        <br/><br/>
        <InputContainer placeHolder={"Enter first name"} width={"20%"} />
      </div>
    </>
  );
};

export { Components };
