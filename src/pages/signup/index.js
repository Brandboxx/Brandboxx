import { useHistory } from "react-router-dom";

import { InputContainer, ButtonContainer } from "../../containers";
import { AuthLayout } from "../layout";

import { FormContainer, Terms, AuthLink } from "./style";

const SignUp = () => {
  const history = useHistory();

  return (
    <AuthLayout text={"Sign Up"}>
      <div>
        <FormContainer>
          <div>
            <InputContainer label={"First Name"} placeHolder={"First Name"} />
          </div>
          <div>
            <InputContainer label={"Last Name"} placeHolder={"Last Name"} />
          </div>
          <div>
            <InputContainer label={"Email"} placeHolder={"First Name"} />
          </div>
          <div>
            <InputContainer
              label={"phone number"}
              placeHolder={"phone number"}
            />
          </div>
          <div>
            <InputContainer
              label={"password"}
              placeHolder={"Enter your secret number"}
            />
          </div>
          <aside style={{ height: "40px" }}></aside>
          <ButtonContainer width={"100%"}>Sign Up</ButtonContainer>
        </FormContainer>
        <Terms>
          By signing up, you agree to our <span>Terms and Conditions</span>
        </Terms>
        <AuthLink>
          Already have an account?
          <span onClick={() => history.push("/login")}> Sign In</span>
        </AuthLink>
      </div>
    </AuthLayout>
  );
};

export { SignUp };
