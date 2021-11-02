import { useHistory } from "react-router-dom";
import { Container } from "./style";

const DashCard = ({ img, bg, cl, title, amount, routeTo }) => {
  const history = useHistory();

  return (
    <Container bg={bg} cl={cl} onClick={() => history.push(routeTo)}>
      <img src={img} alt={""} />
      <aside>
        <p>{title}</p>
        <h3>{amount}</h3>
      </aside>
    </Container>
  );
};

export { DashCard };
