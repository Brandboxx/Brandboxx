import { useState } from "react";
import { AuthModal, Logo } from "../../../../components";
import { ButtonContainer } from "../../../../containers";

import {
  Label,
  Container,
} from "../../../../components/molecules/codeInput/style";
import { usePostRequest } from "../../../../api/useRequestProcessor";
import { toast } from "react-toastify";

export const Verification = ({ data, setShow, setData }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const { mutate: verifyPasswordToken } = usePostRequest(
    "/users/verify-forgot-password-token",
    "verify-forgot-password-token"
  );
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSend = (e) => {
    e.preventDefault();
    const token = otp.join("");
    if (token.length < 6) return;
    const payload = {
      ...data,
      token: otp.join(""),
    };
    verifyPasswordToken(payload, {
      onSuccess: (response) => {
        toast.success(response.message);
        setData((prev) => ({ ...prev, token }));
        setShow((prev) => ({
          ...prev,
          reset: false,
          verification: false,
          createPassword: true,
        }));
      },
    });
  };
  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img
          onClick={() =>
            setShow((prev) => ({ ...prev, reset: false, verification: false }))
          }
          src={"/assets/svg/close.svg"}
          alt={""}
        />
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
            <ButtonContainer onClick={handleSend} width={"100%"}>
              Send
            </ButtonContainer>
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
