import React, { useState } from "react";

import { InputContainer, ButtonContainer } from "../../../containers";

const FastSave = ({ fastSave, setCurrentId, setSuccessModal, setModal }) => {
  const [select, setSelect] = useState(null);

  const successModal = () => {
    setSuccessModal(true);
    setModal(false);
  };

  return (
    <div>
      <h3
        style={{
          fontSize: "36px",
          color: "#149A9B",
          paddingBottom: "5px",
          marginTop: "20px",
        }}
      >
        Fast Save
      </h3>
      <p style={{ color: "rgba(50, 52, 56, 0.6)" }}>
        Enter an amount and pocket plan to save to
      </p>
      <div style={{ width: "70%", paddingTop: "20px" }}>
        {" "}
        <InputContainer
          label={"What amount do you want to save"}
          width={"100%"}
        />
      </div>{" "}
      <div style={{ width: "70%", paddingTop: "20px" }}>
        <InputContainer
          label={"Which pocket plan do you want to save to?"}
          width={"100%"}
        />
      </div>
      <p style={{ marginTop: "10px" }}>
        Select the saving method that you prefer
      </p>
      {fastSave === false ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 0px",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={() => setSelect(true)}
          >
            {select ? (
              <img
                style={{ paddingRight: "10px" }}
                src={"/assets/svg/modal/check.svg"}
                alt={""}
              />
            ) : (
              ""
            )}
            <img src={"/assets/svg/modal/mastercard.svg"} alt={""} />
            <p style={{ marginLeft: "20px" }}>Use Card</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 0px",
              cursor: "pointer",
              marginBottom: "40px",
            }}
            onClick={() => setSelect(false)}
          >
            {select === false ? (
              <img
                style={{ paddingRight: "10px" }}
                src={"/assets/svg/modal/check.svg"}
                alt={""}
              />
            ) : (
              ""
            )}
            <img src={"/assets/svg/modal/visa.svg"} alt={""} />
            <p style={{ marginLeft: "20px" }}>Bank Card</p>
          </div>
        </>
      ) : (
        <div
          style={{ display: "flex", alignItems: "center", padding: "20px 0px" }}
        >
          <img src={"/assets/svg/modal/master.svg"} />
          <p style={{ marginLeft: "15px" }}>**** **** **** 3947</p>
          <p
            style={{ marginLeft: "30px", color: "#149A9B", cursor: "pointer" }}
          >
            Change
          </p>
        </div>
      )}
      <div style={{ marginTop: fastSave ? "80px" : "40px" }}>
        <ButtonContainer
          onClick={fastSave === false ? () => setCurrentId(2) : successModal}
          width={"100%"}
        >
          Continue
        </ButtonContainer>
      </div>
    </div>
  );
};

export { FastSave };
