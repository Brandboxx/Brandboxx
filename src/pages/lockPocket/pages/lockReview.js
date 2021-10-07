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
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { MainLayout } from "../../layout";
import { ButtonContainer } from "../../../containers";

import { LOCKPAGE } from "../../../constants/routes";
import { useHistory, useLocation } from "react-router-dom";
import { currencyFormatter } from "../../../utils/numberFormater";

import { FLUTTERWAVE_PUBLIC_KEY } from "../../../api/config";
import { useSelector } from "react-redux";
import { usePostRequest } from "../../../api/useRequestProcessor";

const LockPreview = () => {
  const history = useHistory();
  const { state } = useLocation();
  const [modal, setModal] = useState(false);
  const { userDetails } = useSelector((state) => state?.auth);
  const { mutate: lockPocketDepositFunds, data } = usePostRequest(
    "/lock-pocket/deposit-funds",
    "view-pocket-balance"
  );
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
      title: "Lock Pocket",
      description: "Add money to Lock Pocket",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  const handleDepositFunds = (response) => {
    console.log({ response });

    closePaymentModal();
    const payload = {
      plan_type: "Lock Pocket",
      plan_code: "02",
      title: state?.title,
      duration: `${state?.duration} months`,
      interest: 5,
      amount: state?.amount,
      payment_mtd: { mtd: "card" },
      transaction_id: response.transaction_id,
      saveCard: 0,
    };
    lockPocketDepositFunds(payload, {
      onSuccess: (data) => {
        console.log({ data });
        setModal(true);
        setTimeout(() => {
          history.replace("/pocket_plans/lock_pocket", "urlhistory");
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
        plan_type: "Lock Pocket",
        plan_code: "02",
        title: state?.title,
        duration: `${state?.duration} months`,
        interest: 5,
        amount: state?.amount,
        payment_mtd: { mtd: "flex" },
        saveCard: 0,
      };

      lockPocketDepositFunds(payload, {
        onSuccess: (data) => {
          setModal(true);
          setTimeout(() => {
            history.replace("/pocket_plans/lock_pocket", "urlhistory");
          }, 3000);
        },
      });
    }
  };

  return (
    <>
      {modal ? <SuccessModal setSuccessModal={setModal} data={data} /> : ""}

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
                  <Header>{state?.title}</Header>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: 30 }}>
                  <Title>Maturity Date</Title>
                  <Info style={{ fontWeight: "600" }}>{state?.maturityDate}</Info>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Amount to lock</Title>
                  <Info style={{ fontWeight: "600" }}>
                    {currencyFormatter(state?.amount)}
                  </Info>
                </div>
              </Review>
              <Review>
                <div style={{ marginTop: "40px" }}>
                  <Title>Total Amount on maturity</Title>
                  <Info style={{ fontWeight: "600" }}>
                    {currencyFormatter(state?.estimatedAmount)}
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

export { LockPreview };
