import { useHistory } from "react-router-dom";

import { Logo } from "../../atoms";

import { ButtonContainer } from "../../../containers";

import { Container, Spacer } from "./style";

const LandingNavigation = () => {
  const history = useHistory();
  return (
    <Container>
      <Logo />
      <p onClick={() => history.push("/dashboard")}>Home</p>
      <p>Plan</p>
      <p>FAQ</p>
      <Spacer />
      <ButtonContainer
        onClick={() => history.push("/login")}
        width={"100px"}
        status={"alternate"}
      >
        Login
      </ButtonContainer>
      <div style={{ width: "30px" }} />
      <ButtonContainer
        onClick={() => history.push("/register")}
        width={"100px"}
      >
        Sign up
      </ButtonContainer>
    </Container>
  );
};

export { LandingNavigation };
