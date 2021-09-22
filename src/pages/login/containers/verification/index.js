import { useState } from "react";
import { AuthModal, Logo } from "../../../../components";
import { ButtonContainer } from "../../../../containers";

import {
  Label,
  Container,
} from "../../../../components/molecules/codeInput/style";

export const Verification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img src={"/assets/svg/close.svg"} alt={""} />
      </AuthModal.HeaderContainer>

      <AuthModal.Content>
        <main>
          <h1>Enter Verification Code</h1>
          <p>
            Enter your verification code that was sent through your e-mail for
            phone number
          </p>
        </main>
        <div>
          <div style={{ width: "100%" }}>
            <Label>Verification Number</Label>
            <Container>
              {otp?.map((otp, i) => (
                <input
                  maxLength="1"
                  type="text"
                  name="otp"
                  key={i}
                  value={otp}
                  onChange={(e) => handleChange(e.target, i)}
                  onFocus={(e) => e.target.select()}
                />
              )) ?? []}
            </Container>
            <br />
            <ButtonContainer width={"100%"}>Send</ButtonContainer>
            <p>
              Havn’t gotten an code?
              <span> Re-send Code</span>
            </p>
          </div>
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};
