import { Input } from "../components";

const InputContainer = ({ label, width, placeHolder, value, ...rest }) => {
  return (
    <Input {...rest}>
      <Input.Label>{label}</Input.Label>
      <Input.TextField width={width} placeholder={placeHolder} value={value} />
    </Input>
  );
};

export { InputContainer };
