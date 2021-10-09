import { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { Container, TextInfo, InputBox } from "./style";
import { GoBack, BankCard, SuccessModal } from "../../components";
import { InputContainer, ButtonContainer } from "../../containers";

import { MainLayout } from "../layout";
import { currencyFormatter } from "../../utils/numberFormater";
import { useGetResquest, usePostRequest } from "../../api/useRequestProcessor";
import { WITHDRAW } from "../../constants/routes";
// import { LockModal } from "../lockPocket/components";

import bankData from "../account/bankData.json";

const FlexFunds = () => {

    const [modal, setModal] = useState(false);
    // const [paymentModal, setPaymentModal] = useState(false);
    const [password, setPassword] = useState("");
    const [amount, setAmount] = useState('0');
    const [bank_id, setBank_id] = useState(null)

    const { data: viewPocketBalance } = useGetResquest(
        "/users/view-pocket-balance",
        ["users", "view-pocket-balance"]
    );


    const { data: banks } = useGetResquest("/bank-accounts/all-banks", "banks");

    useEffect(() => {
        setBank_id(banks?.data[0]?._id)
    }, [banks]);

    const { mutate: withdraw } = usePostRequest(
        "/withdrawal/withdraw-funds",
        "withdraw"
    );

    const handleBankSubmit = () => {
        const values = {
            amount,
            bank_id,
            password: password
        };

        withdraw(values, {
            onSuccess: (res) => {
                //console.log(res, "hi2");
                setModal(true);
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
                    setSuccessModal={setModal}
                    data={`You have successfuly withdrawn  from your flex pocket`}
                    routeTo={"/pocket_plans/flex_pocket"}
                />
            ) : null}
            {/* {paymentModal ? <LockModal setModal={setPaymentModal} /> : null} */}
            <MainLayout>
                <div style={{ padding: "40px 30px", paddingBottom: "10px" }}>
                    <GoBack title={"Go Back"} route={WITHDRAW} />
                </div>
                <Container>
                    <TextInfo>
                        <h1 style={{ paddingBottom: "20px" }}>
                            Withdraw Funds
                            <br /> from Flex Pocket
                        </h1>
                    </TextInfo>
                    <InputBox>
                        <Balance>
                            <p>Available Balance</p>
                            <h3>{currencyFormatter(viewPocketBalance?.data?.flexPocket)}</h3>
                        </Balance>

                        <div style={{ marginTop: "30px" }}>
                            <BankCard
                                setBank={setBank_id}
                                checked={bank_id}
                                bankData={bankData}
                                banks={banks?.data}
                                img={"/assets/svg/access.svg"}
                            />
                        </div>

                        <div style={{ marginTop: "50px" }}>
                            <InputContainer
                                label={"Amount to Withdraw"}
                                placeHolder={"enter amount"}
                                value={amount}
                                type={"number"}
                                width={"100%"}
                                onChange={(e) => setAmount(e.target.value)}
                            // onClick={() => (true)}
                            />
                        </div>

                        <div style={{ marginTop: "50px" }}>
                            <InputContainer
                                label={"Enter Password"}
                                placeHolder={"For security purpose, enter your password"}
                                width={"100%"}
                                onChange={handlePasswordChange}
                                value={password}
                            />
                        </div>


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

export { FlexFunds };
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

// export const Info = styled.div`
//                     display: flex;
//                     align-items: center;
//                     justify-content: space-between;
//                     margin-top: 30px;
//                     p {
//                         font-size: 18px;
//                     &:first-of-type {
//                         color: rgba(20, 154, 155, 1);
//     }
//                     &:last-of-type {
//                         font-weight: 700;
//                     color: rgba(50, 52, 56, 1);
//     }
//   }
//                     `;

