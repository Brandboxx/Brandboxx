import { Link } from "react-router-dom";
import { Container, Header, Content, Amount } from "./style";

const SmallCard = ({ title, amount, content, img, cl, bg, routeTo }) => {
  return (
    <Link to={routeTo} style={{ textDecoration: "none" }}>
      <Container bg={bg}>
        <Header cl={cl}>
          <img width={"10%"} src={img} alt={""} />
          <p>{title}</p>
        </Header>
        <Content>{content}</Content>
        <Amount cl={cl}>{amount}</Amount>
      </Container>
    </Link>
  );
};

export { SmallCard };
