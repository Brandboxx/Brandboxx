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
  }, [isAuth,history]);
  return (
    <AuthLayout text={"Sign Up"}>
      <div>
        {showModal ? (
          <VerificationComponent
            header={"Verify emai"}
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
              placeHolder={"First Name"}
              onChange={handleChange("email")}
            />
          </div>
          <div>
            <InputContainer
              label={"phone number"}
              placeHolder={"phone number"}
              type={"text"}
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
