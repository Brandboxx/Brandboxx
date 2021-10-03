import { Button } from "../components";

const ButtonContainer = ({
  children,
  status,
  width,
  ...restProps
}) => {
  if (status === "alternate") {
    return (
      <Button {...restProps} width={width} bg={"transparent"} cl={"#149A9B"}>
        {children}
      </Button>
    );
  } else {
    return (
      <Button {...restProps} width={width} bg={"#149A9B"} cl={"#fff"}>
        {children}
      </Button>
    );
  }
};

export { ButtonContainer };
