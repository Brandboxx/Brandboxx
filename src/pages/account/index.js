import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import { useFormik } from "formik";

import { usePostRequest } from "../../api/useRequestProcessor";

import { AccountTabs, Modal, Toast } from "../../components";
import { MainLayout } from "../../pages";
import { ModalContainer } from "./components/modal";

import { Header, Padding } from "../pocketPlans/style";
import { ButtonContainer, InputContainer } from "../../containers";
import { FLUTTERWAVE_PUBLIC_KEY } from "../../api/config";

const Account = () => {

  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);

  const [bank, setBank] = useState([]);

  // const { mutate: addCard } = usePostRequest("/cards/register", "addCard");

  console.log(bank);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/banks/NG",
        {
          headers: {
            Authorization: `Bearer FLWSECK-8d392fa62955868e9d7f6d600d7b8f20-X`,
          },
        }
      )
      .then((res) => {
        setBank(res);
      });
  }, []);

  const { mutate: addBank } = usePostRequest(
    "/bank-accounts/register-bank-account",
    "addBank"
  );

  const handleBankSubmit = () => {
    console.log("hi");
    
    addBank(values, {
      onSuccess: (res) => {
        console.log(res, "hi2");
      },
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      account_name: "",
      account_number: "",
      account_bank: "",
    },
    onSubmit: handleBankSubmit,
  });

  const [bankModal, setBankModal] = useState(false);

  return (
    <>
      {bankModal && (
        <Modal>
          <div style={{ width: "60%" }}>
            <h1>Add Bank Details</h1>
            <p>Enter your bank details to be used for transactions</p>
            <br />
            <br />
            <InputContainer
              onChange={handleChange}
              name={"account_name"}
              value={values.account_name}
              label={"Account Name"}
            />

            <br />
            <InputContainer
              onChange={handleChange}
              name={"account_number"}
              value={values.account_number}
              label={"Account Number"}
            />
            <br />

            <label>Account Bank</label>
            <br />
            <select
              style={{
                width: "100%",
                border: "1px solid grey",
                padding: "10px 20px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
              name="account_bank"
            >
              {/* {bank?.data.map((bank) => (
                <option key={bank?.id} value={bank?.code}>
                  {bank.name}
                </option>
              ))} */}
            </select>
          </div>
          <div style={{ width: "100%", marginTop: "50px" }}>
            <ButtonContainer onClick={handleSubmit} width={"100%"}>
              Save
            </ButtonContainer>
          </div>
        </Modal>
      )}
      {/* {cardModal && (
        <Modal>
          <div style={{ width: "60%" }}>
            <h1>Add Card Details</h1>
            <p>Enter your card details to be used for transactions</p>
            <br />
            <br />
            <InputContainer
              onChange={handleChange}
              name={"card_name"}
              value={values.card_name}
              label={"Cardholder Name"}
            />
            <br />
            <InputContainer
              onChange={handleChange}
              name={"card_number"}
              value={values.card_number}
              label={"Card Number"}
            />
            <br />
            <InputContainer
              onChange={handleChange}
              name={"card_type"}
              value={values.card_type}
              label={"Card Type"}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "47%", marginTop: "20px" }}>
                <InputContainer
                  onChange={handleChange}
                  name={"expiry"}
                  value={values.expiry}
                  label={"Exp Date"}
                />
              </div>
              <div style={{ width: "47%", marginTop: "20px" }}>
                <InputContainer
                  onChange={handleChange}
                  name={"cvv"}
                  value={values.cvv}
                  label={"CVV"}
                />
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "50px" }}>
            <ButtonContainer onClick={handleSubmit} width={"100%"}>
              Save
            </ButtonContainer>
          </div>
        </Modal>
      )} */}
      {modal ? <ModalContainer setModal={setModal} /> : null}
      {toast ? <Toast message={toast} setToast={setToast} /> : null}
      <MainLayout>
        <Container>
          <Header>
            <main>
              <h1>My Account</h1>
            </main>
            <img src={"/assets/svg/header/notification.svg"} alt={""} />
          </Header>
          <AccountTabs setModal={setModal} />
        </Container>
      </MainLayout>
    </>
  );
};

const Container = styled.div`
  padding: 35px 40px;
`;

export { Account };
