import { Container, Header, Content, Amount } from "./style";

const SmallCard = ({ title, amount, content, img, cl, bg }) => {
  return (
    <Container bg={bg}>
      <Header cl={cl}>
        <img width={"10%"} src={img} alt={""} />
        <p>{title}</p>
      </Header>
      <Content>{content}</Content>
      <Amount cl={cl}>{amount}</Amount>
    </Container>
  );
};

export { SmallCard };
