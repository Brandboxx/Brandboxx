import {
  Container,
  CardHeader,
  TopHead,
  Amount,
  Button,
  AltButton,
  Content,
} from "./style";

const BigCard = ({
  handleClick,
  bg,
  cl,
  title,
  text,
  img,
  amount,
  icon,
  btnText,
  onClick,
}) => {
  return (
    <Container bg={bg}>
      <CardHeader>
        <div>
          <TopHead cl={cl}>{title}</TopHead>
          <Amount cl={cl}>{amount}</Amount>
        </div>
        <img src={img} alt={""} />
      </CardHeader>
      <div style={{ display: "flex" }}>
        {title === "Flex Pocket Balance" ? (
          <Button onClick={handleClick}>
            <img src={"/assets/svg/add.svg"} alt={""} />
            <p>Add Money</p>
          </Button>
        ) : (
          ""
        )}

        <AltButton onClick={onClick} cl={cl}>
          <img src={icon} alt={""} />
          <p>{btnText}</p>
        </AltButton>
      </div>
      <Content>{text}</Content>
    </Container>
  );
};

export { BigCard };
