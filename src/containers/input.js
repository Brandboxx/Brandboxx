import { Input } from "../components";

const InputContainer = ({
  label,
  width,
  placeHolder,
  onChange,
  value,
  ...rest
}) => {
  return (
    <Input {...rest}>
      <Input.Label>{label}</Input.Label>
      <Input.TextField
        width={width}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
    </Input>
  );
};

export { InputContainer };
