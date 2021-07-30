import { Button } from "./style";

const GoBack = ({ title }) => {
  return (
    <Button>
      <img src={"/assets/svg/modal/back.svg"} alt={""} />
      <p>{title}</p>
    </Button>
  );
};

export { GoBack };
