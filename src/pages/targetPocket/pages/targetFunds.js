import { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { Container, TextInfo, InputBox } from "../../lockPocket/pages/style";
import { GoBack, BankCard, SuccessModal } from "../../../components";
import { InputContainer, ButtonContainer } from "../../../containers";

import { MainLayout } from "../../layout";

import { WITHDRAW } from "../../../constants/routes";
import { LockModal } from "../../lockPocket/components";
import {
  useGetResquest,
  usePostRequest,
} from "../../../api/useRequestProcessor";
import { useHistory, useParams } from "react-router";

import bankData from "../../account/bankData.json";
import { currencyFormatter } from "../../../utils/numberFormater";

const TargetFunds = () => {
  const { id } = useParams();

  const [modal, setModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null)
  const [bank_id, setBank_id] = useState(null)

  const { data: funds } = useGetResquest(
    `/target-pocket/target-pocket/${id}`,
    "funds"
  );

  const { data: banks } = useGetResquest("/bank-accounts/all-banks", "banks");

  const { mutate: withdraw } = usePostRequest(
    "/target-pocket/withdraw-funds",
    "withdraw"
  )

  useEffect(() => {
    setBank_id(banks?.data[0]._id);
  }, [banks])

  const handleBankSubmit = () => {
    const values = {
      target_id: id,
      bank_id: banks?.data[0]?._id,
      password: password,
    };

    withdraw(values, {
      onSuccess: (res) => {
        //console.log(res, "hi2");
        setModal(true);
        setResponse(res)
        // setTimeout(() => {
        //   replace("/pocket_plans/lock_pocket")
        // }, 2000);
      },
    });
  };

  //console.log(banks, "hell");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      {modal ? (
        <SuccessModal
          routeTo={"/pocket_plans/target_pocket"}
          setSuccessModal={setModal}
          data={`You have successfuly withdrawn ${currencyFormatter(response?.data?.amountToWithdraw)} from your lock pocket`}
        />
      ) : null}
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
              <h3>{currencyFormatter(funds?.data?.amount)}</h3>
            </Balance>
            <Info>
              <p>Commision rate</p>
              <p>{funds?.data?.interest ?? "25"}%</p>
            </Info>
            <Info>
              <p>Total withdrawal</p>
              <p>
                {currencyFormatter(funds?.data?.amount - (25 / 100) * funds?.data?.amount)}
              </p>
            </Info>

            <div style={{ marginTop: "30px" }}>
              <BankCard
                checked={bank_id}
                setBank={(val) => setBank_id(val)}
                banks={banks?.data}
                bankData={bankData}
                img={"/assets/svg/access.svg"}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <InputContainer
                label={"Enter Password"}
                type={"password"}
                placeHolder={"For security purpose, enter your password"}
                width={"100%"}
                onChange={handlePasswordChange}
                value={password}
              />
            </div>

            {/* <div style={{ marginTop: "50px" }}>
              <InputContainer
                label={"Choose withdrawal destination"}
                placeHolder={""}
                value={"Flex pocket (N200,000)"}
                width={"100%"}
                onClick={() => setPaymentModal(true)}
              />
            </div> */}
            <div style={{ marginTop: "50px" }}>
              <ButtonContainer onClick={handleBankSubmit} width={"100%"}>
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

export { TargetFunds };
