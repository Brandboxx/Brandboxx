import {
  Container,
  CardHeader,
  TopHead,
  Amount,
  Button,
  AltButton,
  Content,
} from "./style";

const BigCard = ({ handleClick }) => {
  return (
    <Container>
      <CardHeader>
        <div>
          <TopHead>Flex Pocket Balance</TopHead>
          <Amount>N100,000</Amount>
        </div>
        <img src={"/assets/svg/bigLogo.svg"} alt={""} />
      </CardHeader>
      <div style={{ display: "flex" }}>
        <Button onClick={handleClick}>
          <img src={"/assets/svg/add.svg"} alt={""} />
          <p>Add Money</p>
        </Button>
        <AltButton>
          <img src={"/assets/svg/withdraw.svg"} alt={""} />
          <p>Withdraw</p>
        </AltButton>
      </div>
      <Content>
        Flexible savings that alllows you to deposit and withdraw
        <br /> whenever you wish
      </Content>
    </Container>
  );
};

export { BigCard };
