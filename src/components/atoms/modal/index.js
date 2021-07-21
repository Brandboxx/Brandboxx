import { Container, Tint, ModalContainer } from "./style";

const Modal = ({ children }) => {
  return (
    <Container>
      <Tint />
      <ModalContainer>{children || "modal elements"}</ModalContainer>
    </Container>
  );
};

export { Modal };
