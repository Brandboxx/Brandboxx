import { ButtonContainer } from "../../../containers";
import {
  Container,
  UploadContainer,
  Upload,
  UploadHeader,
  UploadSubHeader,
  Button,
} from "./style";

const UploadReceipts = ({ handleSubmit }) => {
  return (
    <Container>
      <h1>Upload Receipt</h1>
      <UploadContainer>
        <form>
          <input type="file" />
        </form>
        <Upload>
          <img src={"/assets/svg/upload.svg"} alt={""} />
          <UploadHeader>Upload Evidence of payment</UploadHeader>
          <UploadSubHeader>File support, Jpeg,png,pdf</UploadSubHeader>
          <Button>Choose file</Button>
          <UploadSubHeader>maximum size 50mb</UploadSubHeader>
        </Upload>
      </UploadContainer>
      <div style={{ marginTop: "50px" }}>
        <ButtonContainer onClick={handleSubmit} width={"100%"}>
          Confirm Payment
        </ButtonContainer>
      </div>
    </Container>
  );
};

export { UploadReceipts };
