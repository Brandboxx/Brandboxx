import React, { useState } from "react";

import { Modal } from "../../components";
// import { InputContainer } from "../../containers";

import { FastSave, AddCard, SelectCard } from "./components";

const modalRenders = [
  {
    id: 1,
    component: <FastSave />,
  },
  {
    id: 2,
    component: <SelectCard />,
  },
  {
    id: 3,
    component: <AddCard />,
  },
];

const renderSpan = () => {
  modalRenders.map((render) => <span>{render}</span>);
};

const DashModalContainer = ({ setModal }) => {
  const [currentId, setCurrentId] = useState(1);

  return (
    <Modal>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        <img
          onClick={() => setModal(false)}
          style={{ cursor: "pointer" }}
          src={"/assets/svg/close.svg"}
          alt={""}
        />
      </div>
      {modalRenders
        .filter((renderer) => {
          if (currentId === renderer.id) {
            return renderer;
          }
        })
        .map((renderer, i) => (
          <div key={i}>{renderer.component}</div>
        ))}
      <div>{renderSpan()}</div>
    </Modal>
  );
};

export { DashModalContainer };

{
  /* <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        <img
          onClick={() => setModal(false)}
          style={{ cursor: "pointer" }}
          src={"/assets/svg/close.svg"}
          alt={""}
        />
      </div>
      <h3 style={{ fontSize: "36px", color: "#149A9B", paddingBottom: "5px" }}>
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
      <p style={{marginTop: "20px"}}>Select the saving method that you prefer</p> */
}
