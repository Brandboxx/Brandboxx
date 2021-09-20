import { Container, Label, TextField } from "./style";

const Input = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export { Input };

Input.Label = function InputLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Input.TextField = function InputTextField({ width, errorText, ...restProps }) {
  return (
    <TextField
      autoComplete="off"
      width={width}
      errorText={errorText}
      {...restProps}
    />
  );
};
