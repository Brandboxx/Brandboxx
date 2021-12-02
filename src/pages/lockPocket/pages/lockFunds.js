import { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { Container, TextInfo, InputBox } from "./style";
import { GoBack, BankCard, SuccessModal } from "../../../components";
import { InputContainer, ButtonContainer } from "../../../containers";

import { MainLayout } from "../../layout";

import { WITHDRAW } from "../../../constants/routes";
import { LockModal } from "../components";
import {
  useGetResquest,
  usePostRequest,
} from "../../../api/useRequestProcessor";
import { useParams } from "react-router";

import bankData from "../../account/bankData.json";
import { currencyFormatter } from "../../../utils/numberFormater";
import { isToday } from "../../../utils/dateUtils";
import { toast } from "react-toastify";

const LockFunds = () => {
  const { id } = useParams();

  const [modal, setModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [password, setPassword] = useState("");
  const [bank_id, setBank_id] = useState(null);
  const [showPassword, setShowPassword] = useState(false)

  const { data: funds } = useGetResquest(
    `/lock-pocket/lock-pocket/${id}`,
    "funds"
  );

  const { data: banks } = useGetResquest("/bank-accounts/all-banks", "banks");

  const { mutate: withdraw } = usePostRequest(
    "/lock-pocket/withdraw-funds",
    "withdraw"
  );

  const handleBankSubmit = () => {

    if (!bank_id) {
      toast("please go to accounts to add a bank!", { type: "error" });
      return;
    } else if (!password) {
      toast("Password is required!", { type: "error" });
      return;
    }

    const values = {
      lock_id: id,
      bank_id,
      password,
    };

    withdraw(values, {
      onSuccess: (res) => {
        if (res.success) {
          setModal(true);
        } else {
          toast(res.message, { type: "error" });
        }
      },
    });
  };

  useEffect(() => {
    if (banks?.length) setBank_id(banks?.data[0]._id);
  }, [banks])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  };

  return (
    <>
      {modal ? (
        <SuccessModal
          setSuccessModal={setModal}
          data={`You have successfuly withdrawn ${currencyFormatter(funds?.data?.amount)} from your lock pocket`}
          routeTo={"/pocket_plans/lock_pocket"}
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

            {
              (isToday(funds?.data?.maturity) || (new Date().getTime() > new Date(funds).getTime())) ?
                <></>
                :
                <>
                  <Info>
                    <p>Commision rate</p>
                    <p>{funds?.data?.interest}%</p>
                  </Info>
                  <Info>
                    <p>Total withdrawal</p>
                    <p>
                      {currencyFormatter(funds?.data?.amount - (funds?.data?.interest / 100) * funds?.data?.amount)}
                    </p>
                  </Info>
                </>
            }

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
                placeHolder={"For security purpose, enter your password"}
                width={"100%"}
                onChange={handlePasswordChange}
                value={password}
                type={showPassword ? "text" : "password"}
                kind={'password'}
                onToggle={(e) => togglePassword(e)}
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

export { LockFunds };
