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
} from "../../lockPocket/pages/style";

import { MainLayout } from "../../layout";
import { ButtonContainer } from "../../../containers";

import { TARGETSAVE, TARGETWITHDRAW } from "../../../constants/routes";
import { useHistory } from "react-router-dom";

import { usePostRequest } from "../../../api/useRequestProcessor";

const TargetReview = () => {
  const history = useHistory();

  const [modal, setModal] = useState(false);

  const handleNavigate = () => {
    setModal(true);
    setTimeout(() => {
      history.push(TARGETWITHDRAW);
    }, 3000);
  };

  return (
    <>
      {modal ? <SuccessModal setSuccessModal={setModal} /> : ""}
      <MainLayout>
        <div style={{ padding: "40px 30px", paddingBottom: "10px" }}>
          <GoBack title={"Go Back"} route={TARGETSAVE} />
        </div>
        <Container>
          <TextInfo>
            <h1 style={{ paddingBottom: "20px" }}>
              Target Pocket <br />
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
                    Target Title
                  </Title>
                  <Header>Land Target</Header>
                </div>
                <div></div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Target amount</Title>
                  <Info style={{ fontWeight: "600" }}>N200,000</Info>
                </div>{" "}
                <div style={{ marginTop: "40px" }}>
                  <Title style={{ textAlign: "right" }}>
                    Method of payment
                  </Title>
                  <Info style={{ fontWeight: "600", textAlign: "right" }}>
                    Weekly
                  </Info>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Start Date</Title>
                  <Info style={{ fontWeight: "600" }}>12th Feb</Info>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <Title style={{ textAlign: "right" }}>End Date</Title>
                  <Info style={{ fontWeight: "600", textAlign: "right" }}>
                    12th April
                  </Info>
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

export { TargetReview };
