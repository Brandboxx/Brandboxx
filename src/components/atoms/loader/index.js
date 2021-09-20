import { useSelector } from "react-redux";
import { Container, ProgressContainer } from "./styles";

export const Loader = () => {
  const { isLoading } = useSelector((state) => state.app);
  return isLoading ? (
    <Container>
      <ProgressContainer></ProgressContainer>
    </Container>
  ) : null;
};
