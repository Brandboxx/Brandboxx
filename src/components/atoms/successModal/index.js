import React from "react";

import { ModalContainer, Container, Tint } from "../modal/style";

const SuccessModal = ({ setSuccessModal }) => {
  return (
    <Container>
      <Tint onClick={() => setSuccessModal(false)} />
      <ModalContainer>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>
          <img
            onClick={() => setSuccessModal(false)}
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
            style={{ color: "#149A9B", textAlign: "center", marginTop: "10px" }}
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
            Your flex pocket have been
            <br /> successfully credited with N50,000
          </p>
        </div>
      </ModalContainer>
    </Container>
  );
};

export { SuccessModal };
