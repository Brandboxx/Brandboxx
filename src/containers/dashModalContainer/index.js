import React, { useState } from "react";

import { Modal } from "../../components";
import { FastSave, AddCard, SelectCard } from "./components";
import { SpanContainer, Span, ActiveSpan } from "./style";

const DashModalContainer = ({ setModal, setSuccessModal }) => {
  const [currentId, setCurrentId] = useState(1);

  const [fastSave, setFastSave] = useState(false);

  const handleFastSave = () => {
    setFastSave(true);
    setCurrentId(4);
  };

  const modalRenders = [
    {
      id: 1,
      component: (
        <FastSave
          setCurrentId={setCurrentId}
          currentId={currentId}
          fastSave={fastSave}
        />
      ),
    },
    {
      id: 2,
      component: (
        <SelectCard setCurrentId={setCurrentId} currentId={currentId} />
      ),
    },
    {
      id: 3,
      component: <AddCard handleFastSave={handleFastSave} />,
    },
    {
      id: 4,
      component: (
        <FastSave
          setCurrentId={setCurrentId}
          setSuccessModal={setSuccessModal}
          setModal={setModal}
        />
      ),
    },
  ];

  const handleBack = () => {
    if (currentId === 1) {
      setCurrentId(1);
      setFastSave(false);
    } else {
      setCurrentId(currentId - 1);
    }
  };

  return (
    <Modal setModal={setModal}>
      <div style={{ display: "flex" }}>
        {currentId !== 1 ? (
          <img
            onClick={handleBack}
            style={{ cursor: "pointer", marginTop: "10px" }}
            src={"/assets/svg/modal/back.svg"}
            alt={""}
          />
        ) : (
          ""
        )}
        <div style={{ flex: 1 }}></div>
        <img
          onClick={() => setModal(false)}
          style={{ cursor: "pointer", marginTop: "10px" }}
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
      <SpanContainer>
        {modalRenders.map((render) =>
          currentId === render.id ? (
            <ActiveSpan key={render.id} />
          ) : (
            <Span key={render.id} />
          )
        )}
      </SpanContainer>
    </Modal>
  );
};

export { DashModalContainer };
