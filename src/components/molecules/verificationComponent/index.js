import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Logo } from "../..";
import { usePostRequest } from "../../../api/useRequestProcessor";
import { ButtonContainer } from "../../../containers";
import { IS_AUTHENTICATED, USER_DETAILS } from "../../../reduxSetup/constant";
import { AuthModal } from "../authModal";
import { Label, Container } from "../codeInput/style";

export const VerificationComponent = ({ header, text, closeModal, data }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const dispatch = useDispatch();
  const history = useHistory();

  const { mutate: verifyEmail } = usePostRequest(
    "/users/verify-email",
    "verify-email"
  );

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = otp.join("");
    if (token.length < 6) return;
    const payload = {
      email: data.user_data.email,
      token: otp.join(""),
    };
    verifyEmail(payload, {
      onSuccess: (response) => {
        dispatch({ type: USER_DETAILS, payload: response.user_data });
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        history.replace('/dashboard');
      },
    });
  };
  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img onClick={closeModal} src={"/assets/svg/close.svg"} alt={""} />
      </AuthModal.HeaderContainer>
      <AuthModal.Content>
        <main>
          <h1>{header || `Enter Header`}</h1>
          <p>{text || `Enter Sub Header`}</p>
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
          </div>
          <div style={{ marginTop: "30px", width: "100%" }}>
            <ButtonContainer onClick={handleSubmit} width={"100%"}>
              Verify Token
            </ButtonContainer>
          </div>
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};
