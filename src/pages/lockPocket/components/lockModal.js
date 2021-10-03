import { useState } from "react";
import { useGetResquest } from "../../../api/useRequestProcessor";
import { SmallModal } from "../../../components";
import { currencyFormatter } from "../../../utils/numberFormater";

import { Options } from "./style";

const LockModal = ({ setModal, handleMethodName, name }) => {
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );
  const payMethods = [
    {
      id: 1,
      img: "/assets/svg/plan3.svg",
      name: `Flex pocket (${currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"
        })`,
    },
    {
      id: 2,
      img: "/assets/svg/modal/master.svg",
      name: "Flutterwave",
    },
  ];

  console.log({ name })

  // const [payMethod, setPayMethod] = useState(name);

  const getCurrent = (id, name) => {
    // setPayMethod(id);
    handleMethodName(name);
    setModal(false);
  };

  return (
    <SmallModal setModal={setModal}>
      {payMethods.map((method) => (
        <Options
          onClick={() => getCurrent(method.id, method.name)}
          bg={
            name === method.name ? "rgba(69, 194, 198, 0.1)" : "transparent"
          }
          key={method.id}
        >
          <img src={method.img} alt={""} />
          <p>{method.name}</p>
        </Options>
      ))}
    </SmallModal>
  );
};

export { LockModal };
