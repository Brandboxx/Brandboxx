import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { usePostRequest } from "../../api/useRequestProcessor";

import { ResetPassword, CreatePassword, Verification } from "./containers";

import { InputContainer, ButtonContainer } from "../../containers";
import { IS_AUTHENTICATED, TOKEN, USER_DETAILS } from "../../reduxSetup/constant";
import { AuthLayout } from "../layout";
import { FormContainer, Terms, AuthLink } from "../signup/style";
import { loginValidator } from "./loginValidator";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState({ reset: false, verification: false });
  const { mutate: login } = usePostRequest("/users/login", "login");

  const handleOnSubmit = (values, actions) => {
    login(values, {
      onSuccess: (response) => {
        actions.resetForm();
        dispatch({ type: USER_DETAILS, payload: response.user_data });
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        dispatch({ type: TOKEN, payload: response.token});
        history.replace("/dashboard");
      },
    });
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidator,
    onSubmit: handleOnSubmit,
  });
  return (
    <>
      {show.reset && <ResetPassword setShow={setShow} />}
      {show.verification && <Verification setShow={setShow} />}
      <AuthLayout text={"Login"}>
        <div style={{ maxWidth: "768px", margin: "0px auto" }}>
          <FormContainer>
            <section>
              <InputContainer
                label={"Email Address"}
                errorText={errors.email}
                value={values.email}
                type={"email"}
                onChange={handleChange("email")}
                placeHolder={"Enter your email address"}
              />
            </section>
            <section>
              <InputContainer
                type="password"
                errorText={errors.password}
                value={values.password}
                onChange={handleChange("password")}
                label={"Password"}
                placeHolder={"Enter your secret number"}
              />
            </section>
            <aside style={{ height: "40px" }}></aside>
            <ButtonContainer
              onClick={handleSubmit}
              type={"submit"}
              width={"100%"}
            >
              Sign In
            </ButtonContainer>
          </FormContainer>
          <Terms>
            Forgot Password?{" "}
            <span
              onClick={() => setShow((prev) => ({ ...prev, reset: true }))}
              style={{ color: "#149A9B" }}
            >
              Reset
            </span>
          </Terms>
          <AuthLink>
            Don’t have an account?
            <span onClick={() => history.push("/register")}> Sign up</span>
          </AuthLink>
        </div>
      </AuthLayout>
    </>
  );
};

export { Login };
