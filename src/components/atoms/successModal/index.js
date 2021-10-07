import React from "react";
import { useHistory } from "react-router";

import { ModalContainer, Container, Tint } from "../modal/style";

const SuccessModal = ({ setSuccessModal, data, routeTo }) => {

  const { replace } = useHistory();

  const closeModal = () => {
    setSuccessModal(false)
    replace(routeTo);
  }

  return (
    <Container>
      <Tint onClick={closeModal} />
      <ModalContainer>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>
          <img
            onClick={closeModal}
            style={{ cursor: "pointer", marginTop: "10px" }}
            src={"/assets/svg/close.svg"}
            alt={""}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "40px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "146px",
                height: "146px",
                borderRadius: "146px",
                background: "#149A9B",
                opacity: 0.1,
              }}
            ></div>
            <img
              style={{ position: "absolute" }}
              src={"/assets/svg/modal/success.svg"}
              alt={""}
            />
          </div>
          <h3
            style={{ color: "#149A9B", textAlign: "center", marginTop: "30px" }}
          >
            Successful
          </h3>
          <p
            style={{
              color: "#323438",
              textAlign: "center",
              marginTop: "10px",
              lineHeight: "25px",
            }}
          >
            {data}
          </p>

        </div>
      </ModalContainer>
    </Container>
  );
};

export { SuccessModal };
