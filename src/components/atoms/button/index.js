import { Container } from "./style";

const Button = ({ width, cl, bg, children, ...restProps }) => {
  return (
    <Container width={width} cl={cl} bg={bg} {...restProps}>
      {children}
    </Container>
  );
};

export { Button };
