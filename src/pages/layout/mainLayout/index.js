import { BottomNavigator, Navigation } from "../../../components";

import { Container, Nav, Info } from "./style";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Nav>
          <Navigation />
        </Nav>

        <Info>{children}</Info>
      </Container>{" "}
      <BottomNavigator />
    </>
  );
};

export { MainLayout };
