import { useHistory } from "react-router";
import { Container, LinkInfo, OuterContainer } from "./style";

export const BottomNavigator = () => {
  const history = useHistory();

  return (
    <OuterContainer>
      <Container>
        <LinkInfo onClick={() => history.push("/dashboard")}>
          <img src={"/assets/svg/responsive/home.svg"} alt={""} />
          <p>Home</p>
        </LinkInfo>
        <LinkInfo onClick={() => history.push("/pocket_plans")}>
          <img src={"/assets/svg/responsive/pocket.svg"} alt={""} />
          <p>Pocket</p>
        </LinkInfo>
        <LinkInfo onClick={() => history.push("/account")}>
          <img src={"/assets/svg/responsive/acc.svg"} alt={""} />
          <p>Account</p>
        </LinkInfo>
      </Container>
    </OuterContainer>
  );
};
