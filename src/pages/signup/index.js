import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { usePostRequest } from "../../api/useRequestProcessor";
import { AuthModal } from "../../components";

import { InputContainer, ButtonContainer } from "../../containers";
import { USER_DETAILS } from "../../reduxSetup/constant";
import { AuthLayout } from "../layout";
import { FormContainer, Terms, AuthLink } from "./style";
import { signUpValidator } from "./validator";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { mutate: register,data } = usePostRequest("/users/register", "register");

  const handleOnSubmit = (values, action) => {
    register(values, {
      onSuccess: (data) => {
        console.log({ data });
        action.resetForm();
        setShowModal(true);
        // history.push("/dashboard")
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
        {showModal ? <AuthModal /> : null}
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
