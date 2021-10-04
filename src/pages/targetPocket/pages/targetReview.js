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
import { useEffect } from "react";
import { currencyFormatter } from "../../../utils/numberFormater";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { FLUTTERWAVE_PUBLIC_KEY } from "../../../api/config";
import { useSelector } from "react-redux";


const TargetReview = () => {
  const { mutate: targetSaveFunds, data } = usePostRequest(
    "/target-pocket/deposit-funds",
    "view-pocket-balance"
  );
  const { userDetails } = useSelector((state) => state?.auth);
  const history = useHistory();
  const { state, pathname } = useLocation()

  const [modal, setModal] = useState(false);

  const config = {
    public_key: FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: state?.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userDetails.email,
      phonenumber: userDetails.phone_number,
      name: `${userDetails.firstname}`,
    },
    customizations: {
      title: "Target Pocket",
      description: "Add money to Target Pocket",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const handleDepositFunds = (response) => {
    console.log({ response });

    closePaymentModal();
    const payload = {
      plan_type: "Target Pocket",
      plan_code: "03",
      title: state.plan_type,
      duration: `${state?.duration} months`,
      interest: 25,
      start: state.start,
      end: state.end,
      mode: state.mode,
      amount: state?.amount,
      payment_mtd: { mtd: "card" },
      transaction_id: response.transaction_id,
      saveCard: 0,
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

  const handleNavigate = () => {
    if (!state?.payment_mtd.includes("Flex")) {
      handleFlutterPayment({
        callback: handleDepositFunds,
        onClose: () => { },
      });
    } else {
      const payload = {
        plan_type: state.plan_type,
        plan_code: "03",
        title: state.plan_type,
        duration: `${state.duration} months`,
        start: state.start,
        end: state.end,
        mode: state.mode,
        "interest": 25,
        amount: state.amount,
        "payment_mtd": { "mtd": "flex" },
        transaction_id: String(Math.random()).split(".").join(""),
        "saveCard": "0"
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
  }

  useEffect(() => {
    console.log({ state })
  }, [state])

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
                  <Info style={{ fontWeight: "600" }}>{currencyFormatter(state.amount)}</Info>
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
                  <Info style={{ fontWeight: "600" }}>{new Date(state.start)?.toDateString()}</Info>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <Title style={{ textAlign: "right" }}>End Date</Title>
                  <Info style={{ fontWeight: "600", textAlign: "right" }}>
                    {new Date(state.end).toDateString()}
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
