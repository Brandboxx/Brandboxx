import { InputContainer, ButtonContainer } from "../../../containers";

const AddCard = ({ handleFastSave }) => {
  return (
    <div>
      <h3
        style={{
          fontSize: "36px",
          color: "#149A9B",
          paddingBottom: "5px",
          marginTop: "20px",
        }}
      >
        Add Card Details
      </h3>
      <p style={{ color: "rgba(50, 52, 56, 0.6)" }}>
        Enter your card details to be used for your transactions
      </p>
      <div style={{ width: "70%", paddingTop: "20px" }}>
        {" "}
        <InputContainer label={"Cardholder Name"} width={"100%"} />
      </div>{" "}
      <div style={{ width: "70%", paddingTop: "20px" }}>
        <InputContainer label={"Card Name"} width={"100%"} />
      </div>
      <div
        style={{
          width: "70%",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "47%" }}>
          <InputContainer label={"Exp Date"} width={"100%"} />
        </div>
        <div style={{ width: "47%" }}>
          <InputContainer label={"CVV"} width={"100%"} />
        </div>
      </div>{" "}
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <img
          src={"/assets/svg/modal/check.svg"}
          style={{ marginTop: "8px" }}
          alt={""}
        />
        <p style={{ marginLeft: "5px" }}>Save card</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <ButtonContainer onClick={handleFastSave} width={"100%"}>
          Continue
        </ButtonContainer>
      </div>
    </div>
  );
};

export { AddCard };
