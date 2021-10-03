import { Modal } from "../../../components";
import { ButtonContainer, InputContainer } from "../../../containers";

const ModalContainer = ({ setModal }) => {
  return (
    <Modal setModal={setModal}>
      <div style={{ padding: "0px 20px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "30px 0px" }} />
          <img
            onClick={() => setModal(false)}
            src={"/assets/svg/close.svg"}
            alt={""}
            style={{cursor:"pointer"}}
          />
        </div>
        <h1 style={{ color: "rgba(0, 0, 0, 1)", fontSize: "34px" }}>
          Add Bank
        </h1>
        <p style={{ marginTop: "10px" }}>
          Your withdrawals go into your bank, please enter your account number
        </p>
        <div style={{ width: "70%", marginTop: "30px" }}>
          <InputContainer placeHolder={"Search Bank"} label={"Search Bank"} />
        </div>
        <div style={{ width: "70%", marginTop: "30px" }}>
          <InputContainer
            placeHolder={"Account Number"}
            label={"Account Number"}
          />
        </div>
        <div style={{ marginTop: "60px" }}>
          <ButtonContainer width={"100%"}>Save</ButtonContainer>
        </div>
      </div>
    </Modal>
  );
};

export { ModalContainer };
