import { useHistory } from "react-router-dom";
import { Button } from "./style";

const GoBack = ({ title, route }) => {

  const history = useHistory()

  return (
    <Button onClick={()=>history.goBack()}>
      <img src={"/assets/svg/modal/back.svg"} alt={""} />
      <p>{title}</p>
    </Button>
  );
};

export { GoBack };
