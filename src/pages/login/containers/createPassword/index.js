import { useFormik } from "formik";
import { toast } from "react-toastify";
import { usePostRequest } from "../../../../api/useRequestProcessor";
import { AuthModal, Logo } from "../../../../components";
import { ButtonContainer, InputContainer } from "../../../../containers";
import { resetPasswordValidator } from "../../loginValidator";

export const CreatePassword = ({ setShow, data }) => {
  const { mutate: resetPassword } = usePostRequest(
    "/users/reset-password",
    "reset-password"
  );
  const handleOnSubmit = (values, actions) => {
    const payload = {
      ...values,
      ...data,
    };

    resetPassword(payload, {
      onSuccess: (response) => {
        actions.resetForm();
        toast.success(response.message);
        setShow((prev) => ({
          ...prev,
          reset: false,
          verification: false,
          createPassword: false,
        }));
      },
    });
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { new_password: "", confirm_new_password: "" },
    validationSchema: resetPasswordValidator,
    onSubmit: handleOnSubmit,
  });
  //console.log(data);
  return (
    <AuthModal>
      <AuthModal.HeaderContainer>
        <Logo />
        <img
          src={"/assets/svg/close.svg"}
          alt={""}
          onClick={() =>
            setShow((prev) => ({
              ...prev,
              reset: false,
              verification: false,
              createPassword: false,
            }))
          }
        />
      </AuthModal.HeaderContainer>

      <AuthModal.Content>
        <main>
          <h1>Reset Password</h1>
          <p>
            Create your new password for Centerpocket and type new password
            twice.
          </p>
        </main>

        <div>
          <section style={{ width: "100%" }}>
            <InputContainer
              label={"New Password"}
              placeHolder={"Enter your new password"}
              value={values.new_password}
              onChange={handleChange("new_password")}
              errorText={errors.new_password}
            />
            <br />
            <br />
            <InputContainer
              label={"Confirm New Password"}
              value={values.confirm_new_password}
              onChange={handleChange("confirm_new_password")}
              errorText={errors.confirm_new_password}
              placeHolder={"Confirm your new password"}
            />
          </section>
          <br />
          <ButtonContainer onClick={handleSubmit} width={"100%"}>
            Reset Password
          </ButtonContainer>
        </div>
      </AuthModal.Content>
    </AuthModal>
  );
};
