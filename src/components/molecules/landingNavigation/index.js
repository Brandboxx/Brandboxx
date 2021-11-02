import { useHistory } from "react-router-dom";

import { Logo } from "../../atoms";

import { ButtonContainer } from "../../../containers";

import { Container, Spacer, Menu } from "./style";
import { ResponsiveLandingNav } from "..";
import { useState } from "react";

const LandingNavigation = () => {
  const history = useHistory();

  const [showNavBar, setShoeNavBar] = useState(false);

  return (
    <>
      <ResponsiveLandingNav height={showNavBar ? `388px` : '0px'} />
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
        <Menu
          onClick={() => setShoeNavBar(!showNavBar)}
          src={"/assets/svg/ham.svg"}
          alt={""}
        />
      </Container>
    </>
  );
};

export { LandingNavigation };
