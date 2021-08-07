import { useState } from "react";

import { GoBack, SuccessModal } from "../../../components";

import {
  Container,
  TextInfo,
  InputBox,
  ReviewContainer,
  Review,
  Title,
  Info,
  Header,
} from "./style";

import { MainLayout } from "../../layout";
import { ButtonContainer } from "../../../containers";

import { LOCKPAGE, WITHDRAW } from "../../../constants/routes";
import { useHistory } from "react-router-dom";

const LockPreview = () => {
  const history = useHistory();

  const [modal, setModal] = useState(false);

  const handleNavigate = () => {
    setModal(true);
    setTimeout(() => {
      history.push(WITHDRAW);
    }, 3000);
  };

  return (
    <>
      {modal ? <SuccessModal setSuccessModal={setModal} /> : ""}
      <MainLayout>
        <div style={{ padding: "40px 30px", paddingBottom: "10px" }}>
          <GoBack title={"Go Back"} route={LOCKPAGE} />
        </div>
        <Container>
          <TextInfo>
            <h1 style={{ paddingBottom: "20px" }}>
              Lock Pocket <br />
              Review
            </h1>
            <p style={{ lineHeight: "25px", color: "rgba(50, 52, 56, 0.6)" }}>
              Yipee, you are almost done !
            </p>
          </TextInfo>
          <InputBox>
            <ReviewContainer>
              <Review>
                <div>
                  <Title>
                    <span>
                      <img
                        style={{ paddingRight: "5px" }}
                        src={"/assets/svg/blueLock.svg"}
                        alt={""}
                      />
                    </span>
                    Lock Title
                  </Title>
                  <Header>Laptop Lock</Header>
                </div>
                <div>
                  <Title style={{ textAlign: "right" }}>Maturity Date</Title>
                  <Info style={{ textAlign: "right" }}>6th May 2021</Info>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Amount to lock</Title>
                  <Info style={{ fontWeight: "600" }}>N200,000</Info>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Total Amount on maturity</Title>
                  <Info style={{ fontWeight: "600" }}>N225,000</Info>
                </div>
              </Review>
              <p style={{ marginTop: "30px", fontSize: "10px" }}>
                On maturity, funds go to your flex pocket
              </p>
            </ReviewContainer>
            <div style={{ display: "flex", marginTop: "30px" }}>
              <img
                src={"/assets/svg/modal/check.svg"}
                alt={""}
                style={{ paddingRight: "10px" }}
              />
              <p style={{ color: "rgba(50, 52, 56, 0.6)" }}>
                I agree to centerpocket locking the stipulated
                <br /> amount of money
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <ButtonContainer onClick={handleNavigate} width="100%">
                Confirm
              </ButtonContainer>
            </div>
          </InputBox>
        </Container>
      </MainLayout>
    </>
  );
};

export { LockPreview };
