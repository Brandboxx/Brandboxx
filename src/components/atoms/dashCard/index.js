import { Link } from "react-router-dom";
import { Container } from "./style";

const DashCard = ({ img, bg, cl, title, amount, routeTo }) => {
  return (
    <Link to={routeTo} style={{ textDecoration: "none", width: '27.33%' }}>
      <Container bg={bg} cl={cl} style={{ width: "100%" }}>
        <img src={img} alt={""} />
        <aside>
          <p>{title}</p>
          <h3>{amount}</h3>
        </aside>
      </Container>
    </Link>
  );
};

export { DashCard };
