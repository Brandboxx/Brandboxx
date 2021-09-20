import { useState, useEffect } from "react";
import styled from "styled-components/macro";

import { AuthLayout } from "../layout";
import { AuthModalContainer } from "../../containers";

const VerifyAccount = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const number = 6;
  const [otp, setOpt] = useState(new Array(number).fill(""));

  const handleChange = (e, index) => {
    if (isNaN(e.value)) return false;

    setOpt([...otp.map((d, idx) => (idx === index ? e.value : d))]);

    if (e.nextSibling) {
      e.nextSibling.focus();
    }
  };

  const handleVerify = (payload)=>{

  }

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    setEmail(userDetails.email);
  }, []);

  return (
    <>
      {modal ? (
        <AuthModalContainer
          header={"Enter Verification Code"}
          text={
            "Enter your verification code that was sent through your e-mail or phone number."
          }
          label={"Phone Number"}
          placeHolder={"Enter your phone number"}
          switchTo={"verification"}
          //   clickToSwitch={handleEmailSwitch}
          toggleModal={() => setModal(false)}
          handleClick={() =>
            handleVerify({ email: email, token: otp.join("") })
          }
          otp={otp}
          handleOtpChange={handleChange}
          number={number}
        />
      ) : (
        ""
      )}
      <AuthLayout text={"Verify"}>
        <Container>
          <Text>
            <span onClick={() => setModal(true)}>Click here</span> to verify
            account using the code sent to your email
          </Text>
        </Container>
      </AuthLayout>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #111111;

  span {
    color: #149a9b;
    cursor: pointer;
  }
`;

export { VerifyAccount };
