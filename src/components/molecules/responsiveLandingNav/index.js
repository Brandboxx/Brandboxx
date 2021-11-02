import { Border, Container, LinkBtn } from "./style";
import { ButtonContainer } from "../../../containers/button";
import { useHistory } from "react-router";

export const ResponsiveLandingNav = ({ height }) => {
  const history = useHistory();

  return (
    <Container style={{ height: height }}>
      <LinkBtn>Home</LinkBtn>
      <LinkBtn>Plan</LinkBtn>
      <LinkBtn>FAQ</LinkBtn>
      <Border />
      <ButtonContainer onClick={()=>history.push("/login")} status="alternate" width={"100px"}>
        Login
      </ButtonContainer>
      <ButtonContainer onClick={()=>history.push("/register")} width={"100px"}>Sign up</ButtonContainer>
    </Container>
  );
};
