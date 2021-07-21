import { Button, Container } from "./style";

const Tab = ({ toggle, setToggle }) => {
  return (
    <Container>
      <Button
        onClick={() => setToggle(true)}
        bg={toggle ? "#149A9B" : "transparent"}
        cl={toggle ? "#fff" : "ADAEAF"}
      >
        Weekly
      </Button>
      <Button
        onClick={() => setToggle(false)}
        bg={toggle === false ? "#149A9B" : "transparent"}
        cl={toggle === false ? "#fff" : "ADAEAF"}
      >
        Monthly
      </Button>
    </Container>
  );
};

export { Tab };
