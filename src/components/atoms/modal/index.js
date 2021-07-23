import { Container, Tint, ModalContainer } from "./style";

const Modal = ({ children, setModal }) => {
  return (
    <Container>
      <Tint onClick={() => setModal(false)} />
      <ModalContainer>{children || "modal elements"}</ModalContainer>
    </Container>
  );
};

export { Modal };
