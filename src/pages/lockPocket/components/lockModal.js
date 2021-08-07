import { useState } from "react";
import { SmallModal } from "../../../components";

import { Options, AddCard } from "./style";

const LockModal = ({ setModal }) => {
  const payMethods = [
    {
      id: 1,
      img: "/assets/svg/plan3.svg",
      amount: "Flex pocket (N200,000)",
    },
    {
      id: 2,
      img: "/assets/svg/modal/master.svg",
      amount: "**** **** **** 3947",
    },
  ];

  const [payMethod, setPayMethod] = useState(1);

  const getCurrent = (id) => {
    setPayMethod(id);
  };

  return (
    <SmallModal setModal={setModal}>
      {payMethods.map((method) => (
        <Options
          onClick={() => getCurrent(method.id)}
          bg={
            payMethod === method.id ? "rgba(69, 194, 198, 0.1)" : "transparent"
          }
          key={method.id}
        >
          <img src={method.img} alt={""} />
          <p>{method.amount}</p>
        </Options>
      ))}
      <AddCard>
        <span>+</span>Add New Card
      </AddCard>
    </SmallModal>
  );
};

export { LockModal };
