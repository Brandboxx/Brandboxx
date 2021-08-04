import { useState } from "react";

import { ChoosePayment } from "../../containers/pocketPlanModalContainer";
import { GoBack, SuccessModal } from "../../components";
import { InputContainer, ButtonContainer } from "../../containers";
import { MainLayout } from "../layout";
import { Container, TextInfo, InputBox } from "./style";

import { FLEXPOCKET } from "../../constants/routes";

const AddMoney = () => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(null);

  const [amount, setAmount] = useState(false);

  const [successModal, setSuccessModal] = useState(false);

  const [payMethod, setPayMethod] = useState(false);

  const handleSubmit = () => {
    setSuccessModal(true);
    setModal(false);
    setAmount(false);
  };

  const handleCard = () => {
    setPayMethod(false);
    setSelect(true);
  };

  const handleBank = () => {
    setPayMethod(true);
    setSelect(false);
  };

  return (
    <>
      {modal ? (
        <ChoosePayment
          setModal={setModal}
          setAmount={setAmount}
          payMethod={payMethod}
          setSuccessModal={setSuccessModal}
        />
      ) : (
        <></>
      )}

      {successModal ? (
        <SuccessModal setSuccessModal={setSuccessModal} />
      ) : (
        <></>
      )}
      <MainLayout>
        <div style={{ padding: "40px 30px", paddingBottom: "10px" }}>
          <GoBack title={"Go Back"} route={FLEXPOCKET} />
        </div>
        <Container>
          <TextInfo>
            <h1 style={{ paddingBottom: "20px" }}>
              Add money to Flex
              <br /> Pocket
            </h1>
            <p style={{ lineHeight: "25px", color: "rgba(50, 52, 56, 0.6)" }}>
              Lorem ipsum dolor sit amet, consectetuer
              <br /> adipiscing elit. Aenean commodo ligula eget
              <br /> dolor.{" "}
            </p>
          </TextInfo>
          <InputBox>
            <InputContainer
              label={"Amount to add"}
              width={"100%"}
              placeHolder={"Enter amount"}
            />
            <p style={{ color: "rgba(50, 52, 56, 0.6)", marginTop: "30px" }}>
              Select the saving method that you prefer
            </p>

            {amount ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 0px",
                }}
              >
                <img src={"/assets/svg/modal/master.svg"} />
                <p style={{ marginLeft: "15px" }}>**** **** **** 3947</p>
                <p
                  style={{
                    marginLeft: "30px",
                    color: "#149A9B",
                    cursor: "pointer",
                  }}
                >
                  Change
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                  onClick={handleCard}
                >
                  {select ? (
                    <img
                      style={{ paddingRight: "10px" }}
                      src={"/assets/svg/modal/check.svg"}
                      alt={""}
                    />
                  ) : (
                    ""
                  )}
                  <img src={"/assets/svg/modal/mastercard.svg"} alt={""} />
                  <p style={{ marginLeft: "20px" }}>Use Card</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 0px",
                    cursor: "pointer",
                    marginBottom: "40px",
                  }}
                  onClick={handleBank}
                >
                  {select === false ? (
                    <img
                      style={{ paddingRight: "10px" }}
                      src={"/assets/svg/modal/check.svg"}
                      alt={""}
                    />
                  ) : (
                    ""
                  )}
                  <img src={"/assets/svg/modal/visa.svg"} alt={""} />
                  <p style={{ marginLeft: "20px" }}>Bank Card</p>
                </div>
              </>
            )}
            <ButtonContainer
              onClick={amount ? handleSubmit : () => setModal(true)}
              width={"100%"}
            >
              Continue
            </ButtonContainer>
          </InputBox>
        </Container>
      </MainLayout>
    </>
  );
};

export { AddMoney };
