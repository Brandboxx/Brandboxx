import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

// import { ChoosePayment } from "../../containers/pocketPlanModalContainer";
import { GoBack, SuccessModal } from "../../components";
import { InputContainer, ButtonContainer } from "../../containers";
import { MainLayout } from "../layout";
import { Container, TextInfo, InputBox } from "./style";

import { FLEXPOCKET } from "../../constants/routes";
import { useSelector } from "react-redux";
import { FLUTTERWAVE_PUBLIC_KEY } from "../../api/config";
import { usePostRequest } from "../../api/useRequestProcessor";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { GoBackContainer } from "../flexPocket/style";

const AddMoney = () => {
  // const [modal, setModal] = useState(false);
  const { push } = useHistory()
  // const [select, setSelect] = useState(true);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  // const [payMethod, setPayMethod] = useState("card");
  // const [amount, setAmount] = useState(false);
  // const [saveCard, setSaveCard] = useState(false);

  const { userDetails } = useSelector((state) => state.auth);
  const { mutate: depositFunds } = usePostRequest("/deposit/deposit-funds", [
    "users",
    "view-pocket-balance",
  ]);

  const config = {
    public_key: FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: topUpAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userDetails.email,
      phonenumber: userDetails.phone_number,
      name: `${userDetails.firstname}`,
    },
    customizations: {
      title: "Flex Pocket",
      description: "Add money to Flex Pocket",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  const handleDepositFunds = (response) => {
    closePaymentModal();
    const payload = {
      plan_type: "Flex Pocket",
      amount: response.amount,
      plan_code: "01",
      transaction_id: response.transaction_id,
      saveCard: 1,
      payment_mtd: "card",
    };
    depositFunds(payload, {
      onSuccess: (data) => {
        toast.success(data.message);
        setTopUpAmount("");
        push("/pocket_plans/flex_pocket")
        // setSaveCard(false);
        // setSelect(null);
      },
    });
  };
  const handleSubmit = () => {
    handleFlutterPayment({
      callback: handleDepositFunds,
      onClose: () => { },
    });
  };

  // const handleCard = () => {
  //   setPayMethod("Card");
  //   setSelect(true);
  // };

  return (
    <>
      {/* {modal ? (
        <ChoosePayment
          setModal={setModal}
          // // setAmount={setAmount}
          payMethod={payMethod}
          setSuccessModal={setSuccessModal}
        />
      ) : (
        <></>
      )} */}

      {successModal ? (
        <SuccessModal setSuccessModal={setSuccessModal} />
      ) : (
        <></>
      )}
      <MainLayout>
        <GoBackContainer style={{ padding: "40px 30px", paddingBottom: "10px" }}>
          <GoBack title={"Go Back"} route={FLEXPOCKET} />
        </GoBackContainer>
        <Container>
          <TextInfo>
            <h1 style={{ paddingBottom: "20px" }}>
              Add money to Flex
              <br /> Pocket
            </h1>
            <p style={{ lineHeight: "25px", color: "rgba(50, 52, 56, 0.6)" }}>
              Flexible savings that alllows you to<br /> deposit and withdraw whenever you wish
            </p>
          </TextInfo>
          <InputBox>
            <InputContainer
              label={"Amount to add"}
              width={"100%"}
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
              type={"number"}
              placeHolder={"Enter amount"}
              errorText={topUpAmount && topUpAmount < 200 ? "must be more than NGN 200" : ""}
            />
            {/* <p style={{ color: "rgba(50, 52, 56, 0.6)", marginTop: "30px" }}>
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
                <img src={"/assets/svg/modal/master.svg"} alt={""} />
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
                  onClick={() => setSaveCard(!saveCard)}
                >
                  <input
                    type={"checkbox"}
                    color={"149A9B"}
                    checked={saveCard && true}
                  />

                  <p style={{ marginLeft: "20px", fontSize: "12px" }}>
                    Save Card
                  </p>
                </div> */}
            {/* <div
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
                  </div> */}
            {/* </>
            )} */}

            <ButtonContainer
              style={{ marginTop: 50, backgroundColor: topUpAmount < 200 ? "#149a9b90" : "#149a9b" }}
              onClick={topUpAmount < 200 ? null : handleSubmit}
              // onClick={amount ? handleSubmit : () => setModal(true)}
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
