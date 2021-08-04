import { ButtonContainer } from "../../button";
import {
  Container,
  Info,
  InfoHeader,
  InfoNumber,
  BankTag,
  BankName,
  InputContainer,
  Information,
  BtnContainer,
} from "./style";

const BanTransfer = ({ setCurrentId, currentId }) => {
  return (
    <Container>
      <h1>Bank Transfer</h1>
      <BankTag>
        <img src={"/assets/svg/bankToken.svg"} alt={""} />
        <Info>
          <InfoHeader>CENTER POCKET GLOBAL TECH</InfoHeader>
          <div>
            <InfoNumber>0789083947</InfoNumber>
            <BankName>Access Bank</BankName>
          </div>
        </Info>
      </BankTag>

      <InputContainer>
        <input value={"0789083947"} />
        <ButtonContainer width={"40%"}>Copy</ButtonContainer>
      </InputContainer>

      <Information>
        Pay into the bank account above and click on confirm when you’re done.
      </Information>

      <BtnContainer>
        <ButtonContainer
          onClick={() => setCurrentId(currentId + 1)}
          width={"100%"}
        >
          Upload Receipt
        </ButtonContainer>
      </BtnContainer>
    </Container>
  );
};

export { BanTransfer };
