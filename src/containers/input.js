import { Input } from "../components";

const InputContainer = ({ label, width, placeHolder }) => {
  return (
    <Input>
      <Input.Label>{label}</Input.Label>
      <Input.TextField width={width} placeholder={placeHolder} />
    </Input>
  );
};

export { InputContainer };
