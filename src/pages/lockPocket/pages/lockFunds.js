import { useState } from "react";
import styled from "styled-components/macro";

import { Container, TextInfo, InputBox } from "./style";
import { GoBack, BankCard, SuccessModal } from "../../../components";
import { InputContainer, ButtonContainer } from "../../../containers";

import { MainLayout } from "../../layout";

import { WITHDRAW } from "../../../constants/routes";
import { LockModal } from "../components";

const LockFunds = () => {
  const [modal, setModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  return (
    <>
      {modal ? <SuccessModal setSuccessModal={setModal} /> : null}
      {paymentModal ? <LockModal setModal={setPaymentModal} /> : null}
      <MainLayout>
        <div style={{ padding: "40px 30px", paddingBottom: "10px" }}>
          <GoBack title={"Go Back"} route={WITHDRAW} />
        </div>
        <Container>
          <TextInfo>
            <h1 style={{ paddingBottom: "20px" }}>
              Withdraw Locked
              <br /> Funds
            </h1>
          </TextInfo>
          <InputBox>
            <Balance>
              <p>Total Balance</p>
              <h3>N100,000</h3>
            </Balance>
            <Info>
              <p>Commision rate</p>
              <p>5%</p>
            </Info>
            <Info>
              <p>Total withdrawal</p>
              <p>N95,000</p>
            </Info>

            <div style={{ marginTop: "30px" }}>
              <BankCard
                bank={"Access bank"}
                number={"0789083947"}
                img={"/assets/svg/access.svg"}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <InputContainer
                label={"Enter Password"}
                placeHolder={"For security purpose, enter your password"}
                width={"100%"}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <InputContainer
                label={"Choose withdrawal destination"}
                placeHolder={""}
                value={"Flex pocket (N200,000)"}
                width={"100%"}
                onClick={() => setPaymentModal(true)}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <ButtonContainer onClick={() => setModal(true)} width={"100%"}>
                Withdraw funds
              </ButtonContainer>
            </div>
          </InputBox>
        </Container>
      </MainLayout>
    </>
  );
};

const Balance = styled.div`
  p {
    font: 18px;
    color: rgba(50, 52, 56, 1);
  }
  h3 {
    font-size: 22px;
    color: rgba(50, 52, 56, 1);
    margin-top: 5px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  p {
    font-size: 18px;
    &:first-of-type {
      color: rgba(20, 154, 155, 1);
    }
    &:last-of-type {
      font-weight: 700;
      color: rgba(50, 52, 56, 1);
    }
  }
`;

export { LockFunds };
