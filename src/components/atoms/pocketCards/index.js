import { Container } from "./style";

const PocketCards = ({ img, title, text, amount, bg, cl, stat }) => {
  return (
    <Container bg={bg} cl={cl}>
      <header>
        <img src={img} alt={""} />
        <h3>{title}</h3>
      </header>
      <p>{text}</p>
      <footer>
        <p>
          <span>{stat}</span> Interest
        </p>
        <h3>N{amount}</h3>
      </footer>
    </Container>
  );
};

export { PocketCards };
