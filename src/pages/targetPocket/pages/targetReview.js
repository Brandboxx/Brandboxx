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
import { useHistory, useLocation } from "react-router-dom";

import { usePostRequest } from "../../../api/useRequestProcessor";



const TargetReview = () => {
  const { mutate: targetSaveFunds, data } = usePostRequest(
    "/target-pocket/deposit-funds",
    "view-pocket-balance"
  );
  const history = useHistory();
  const { state, pathname } = useLocation()

  const [modal, setModal] = useState(false);

  const handleNavigate = () => {

    const payload = {
      plan_type: state.plan_type,
      plan_code: "03",
      title: "Investment",
      duration: `${state.duration} months`,
      start: state.start,
      end: state.end,
      mode: state.mode,
      "interest": 25,
      amount: state.amount,
      "payment_mtd": { "mtd": "flex" },
      transaction_id: "2512878",
      "saveCard": ""
    };

    targetSaveFunds(payload, {
      onSuccess: (data) => {
        setModal(true);
        setTimeout(() => {
          history.replace("/pocket_plans/target_pocket");
        }, 3000);
      },
    });
  };

  return (
    <>
      {modal ? <SuccessModal setSuccessModal={setModal} data={data} /> : ""}
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
                  <Header>{state.plan_type}</Header>
                </div>
                <div></div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Target amount</Title>
                  <Info style={{ fontWeight: "600" }}>{state.amount}</Info>
                </div>{" "}
                <div style={{ marginTop: "40px" }}>
                  <Title style={{ textAlign: "right" }}>
                    Method of payment
                  </Title>
                  <Info style={{ fontWeight: "600", textAlign: "right" }}>
                    {state.mode}
                  </Info>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Start Date</Title>
                  <Info style={{ fontWeight: "600" }}>{state.start}</Info>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <Title style={{ textAlign: "right" }}>End Date</Title>
                  <Info style={{ fontWeight: "600", textAlign: "right" }}>
                    {state.end}
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
