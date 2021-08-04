import { useState } from "react";

import { Modal } from "../../components";

import { BanTransfer, UploadReceipts } from "./withBank";

import { SelectCard, AddCard } from "../dashModalContainer/components";

const ChoosePayment = ({ setModal, setAmount, payMethod, setSuccessModal }) => {
  const [currentId, setCurrentId] = useState(1);

  const handleSetAmount = () => {
    setAmount(true);
    setModal(false);
  };

  const confirmPayment = () => {
    setModal(false);
    setSuccessModal(true);
  };

  const modalRenders = [
    {
      id: 1,
      component: (
        <SelectCard setCurrentId={setCurrentId} currentId={currentId} />
      ),
    },
    {
      id: 2,
      component: (
        <AddCard setCurrentId={setCurrentId} handleFastSave={handleSetAmount} />
      ),
    },
  ];

  const payModalRenderer = [
    {
      id: 1,
      component: (
        <BanTransfer setCurrentId={setCurrentId} currentId={currentId} />
      ),
    },
    {
      id: 2,
      component: <UploadReceipts handleSubmit={confirmPayment} />,
    },
  ];

  return (
    <Modal setModal={setModal}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1" }} />
        <img
          onClick={() => setModal(false)}
          style={{ cursor: "pointer", marginTop: "10px" }}
          src={"/assets/svg/close.svg"}
          alt={""}
        />
      </div>
      {payMethod === false
        ? modalRenders
            .filter((renderer) => {
              if (currentId === renderer.id) {
                return renderer;
              }
            })
            .map((renderer, i) => <div key={i}>{renderer.component}</div>)
        : payModalRenderer
            .filter((renderer) => {
              if (currentId === renderer.id) {
                return renderer;
              }
            })
            .map((renderer, i) => <div key={i}>{renderer.component}</div>)}
    </Modal>
  );
};

export { ChoosePayment };
