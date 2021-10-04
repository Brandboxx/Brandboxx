import { useFormik } from "formik";

import { usePostRequest } from "../../../api/useRequestProcessor";

import { Modal } from "../../../components";
import { ButtonContainer, InputContainer } from "../../../containers";

const ModalContainer = ({ setModal, bank }) => {
  const { mutate: addBank } = usePostRequest(
    "/bank-accounts/register-bank-account",
    "addBank"
  );

  const handleBankSubmit = () => {
    addBank(values, {
      onSuccess: (res) => {
        console.log(res, "hi2");
      },
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      account_name: "",
      account_number: "",
      account_bank: "",
    },
    onSubmit: handleBankSubmit,
  });

  return (
    <Modal setModal={setModal}>
      <div style={{ padding: "0px 20px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "30px 0px" }} />
          <img
            onClick={() => setModal(false)}
            src={"/assets/svg/close.svg"}
            alt={""}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1 style={{ color: "rgba(0, 0, 0, 1)", fontSize: "34px" }}>
          Add Bank
        </h1>
        <p style={{ marginTop: "10px" }}>
          Your withdrawals go into your bank, please enter your account number
        </p>
        <div style={{ width: "70%", marginTop: "30px" }}>
          <label>Select Bank</label>
          <select
            required
            value={values.account_bank}
            name={"account_bank"}
            onChange={handleChange}
            style={{ marginTop: 10, height: 50, padding: 10, borderRadius: 8 }}
          >
            <option disabled value="">
              Select Bank
            </option>
            {bank.map((bank) => (
              <option key={bank._id} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ width: "70%", marginTop: "30px" }}>
          <InputContainer
            onChange={handleChange}
            placeHolder={"Account Name"}
            label={"Account Name"}
            required
            value={values.account_name}
            name={"account_name"}
          />
        </div>

        <div style={{ width: "70%", marginTop: "30px" }}>
          <InputContainer
            onChange={handleChange}
            placeHolder={"Account Number"}
            label={"Account Number"}
            value={values.account_number}
            name={"account_number"}
          />
        </div>
        <div style={{ marginTop: "60px" }}>
          <ButtonContainer onClick={handleSubmit} width={"100%"}>
            Save
          </ButtonContainer>
        </div>
      </div>
    </Modal>
  );
};

export { ModalContainer };
