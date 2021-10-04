import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components/macro";

import { AccountTabs, Toast } from "../../components";
import { MainLayout } from "../../pages";
import { ModalContainer } from "./components/modal";

import { Header } from "../pocketPlans/style";
import bankData from "./bankData.json";

const Account = () => {
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);

  const [bank, setBank] = useState([]);

  const fetchBanks = () => {
    axios
      .get("https://api.flutterwave.com/v3/banks/NG", {
        headers: {
          Authorization: `Bearer FLWSECK-8d392fa62955868e9d7f6d600d7b8f20-X`,
        },
      })
      .then((res) => {
        setBank(res);
      });
  };

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setBank(bankData);
    } else {
      fetchBanks();
    }
  }, []);


  return (
    <>
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
      {modal ? <ModalContainer bank={bank} setModal={setModal} /> : null}
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
