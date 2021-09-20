import { Input } from "../components";

const InputContainer = ({
  label,
  width,
  placeHolder,
  onChange,
  value,
  errorText,
  ...rest
}) => {
  return (
    <Input {...rest}>
      <Input.Label>{label}</Input.Label>
      <Input.TextField
        width={width}
        placeholder={placeHolder}
        onChange={onChange}
        errorText={errorText}
        {...rest}
      />
      <span style={{ color: "#ff0033", fontSize: "12px" }}>{errorText}</span>
    </Input>
  );
};

export { InputContainer };
