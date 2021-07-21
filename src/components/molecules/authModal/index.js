import { Container, Tint, HeaderContainer, Content } from "./style";

const AuthModal = ({ children, ...restProps }) => {
  return (
    <>
      <Tint />
      <Container {...restProps}>{children}</Container>
    </>
  );
};

export { AuthModal };

AuthModal.HeaderContainer = function AuthModalHeaderContainer({
  children,
  ...restProps
}) {
  return <HeaderContainer {...restProps}>{children}</HeaderContainer>;
};

AuthModal.Content = function AuthModalContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
