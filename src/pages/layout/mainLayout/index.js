import { Navigation, Header } from "../../../components";

import { Container, Nav, Info } from "./style";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Navigation />
      </Nav>

      <Info>
        <Header />
        {children}
      </Info>
    </Container>
  );
};

export { MainLayout };
