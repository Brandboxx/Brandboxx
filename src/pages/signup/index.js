import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { usePostRequest } from "../../api/useRequestProcessor";

import { InputContainer, ButtonContainer } from "../../containers";
import { AuthLayout } from "../layout";
import { FormContainer, Terms, AuthLink } from "./style";
import { signUpValidator } from "./validator";

const SignUp = () => {
  const history = useHistory();
  const { mutate: register } = usePostRequest("/users/register", "register");

  const handleOnSubmit = (values, action) => {
    console.log({ values });
    register(values, {
      onSuccess: (data) => {
        console.log({data});
        action.resetForm();
        history.push("/dashboard")
      },
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    validationSchema: signUpValidator,
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone_number: "",
    },
    onSubmit: handleOnSubmit,
  });

  return (
    <AuthLayout text={"Sign Up"}>
      <div>
        <FormContainer>
          <div>
            <InputContainer
              value={values.firstname}
              label={"First Name"}
              placeHolder={"First Name"}
              onChange={handleChange("firstname")}
            />
          </div>
          <div>
            <InputContainer
              value={values.lastname}
              label={"Last Name"}
              placeHolder={"Last Name"}
              onChange={handleChange("lastname")}
            />
          </div>
          <div>
            <InputContainer
              value={values.email}
              label={"Email"}
              placeHolder={"First Name"}
              onChange={handleChange("email")}
            />
          </div>
          <div>
            <InputContainer
              label={"phone number"}
              placeHolder={"phone number"}
              value={values.phone_number}
              onChange={handleChange("phone_number")}
            />
          </div>
          <div>
            <InputContainer
              type="password"
              label={"password"}
              onChange={handleChange("password")}
              value={values.password}
              placeHolder={"Enter your secret number"}
            />
          </div>
          <aside style={{ height: "40px" }}></aside>
          <ButtonContainer
            type={"submit"}
            onClick={handleSubmit}
            width={"100%"}
          >
            Sign Up
          </ButtonContainer>
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
