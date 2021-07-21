import { Container } from "./style";

const DashCard = ({ img, bg, cl, title, amount }) => {
  return (
    <Container bg={bg} cl={cl}>
      <img src={img} alt={""} />
      <aside>
        <p>{title}</p>
        <h3>N{amount}</h3>
      </aside>
    </Container>
  );
};

export { DashCard };
