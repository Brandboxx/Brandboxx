import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { usePostRequest } from "../../api/useRequestProcessor";
import { VerificationComponent } from "../../components";

import { InputContainer, ButtonContainer } from "../../containers";
import { AuthLayout } from "../layout";
import { FormContainer, Terms, AuthLink } from "./style";
import { signUpValidator } from "./validator";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const SignUp = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const { mutate: register, data } = usePostRequest(
    "/users/register",
    "register"
  );
  const [showPassword, setShowPassword] = useState(false)

  const handleOnSubmit = (values, action) => {
    register(values, {
      onSuccess: (data) => {
        action.resetForm();
        toast.success(data.message);
        setShowModal(true);
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
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuth) history.push("/dashboard");
  }, [isAuth, history]);

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  };

  return (
    <AuthLayout text={"Sign up"}>
      <div>
        {showModal ? (
          <VerificationComponent
            header={"Verify email"}
            data={data}
            text={"Enter otp sent to you email"}
          />
        ) : null}
        <FormContainer>
          <div>
            <InputContainer
              value={values.firstname}
              label={"First Name"}
              placeHolder={"First Name"}
              type={"text"}
              onChange={handleChange("firstname")}
            />
          </div>
          <div>
            <InputContainer
              value={values.lastname}
              label={"Last Name"}
              type={"text"}
              placeHolder={"Last Name"}
              onChange={handleChange("lastname")}
            />
          </div>
          <div>
            <InputContainer
              value={values.email}
              label={"Email"}
              type={"email"}
              placeHolder={"Email Addres"}
              onChange={handleChange("email")}
            />
          </div>
          <div>
            <InputContainer
              label={"Phone Number"}
              placeHolder={"phone number"}
              type={"text"}
              value={values.phone_number}
              onChange={handleChange("phone_number")}
            />
          </div>
          <div>
            <InputContainer
              label={"Password"}
              onChange={handleChange("password")}
              value={values.password}
              type={showPassword ? "text" : "password"}
              kind={'password'}
              onToggle={(e) => togglePassword(e)}
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
