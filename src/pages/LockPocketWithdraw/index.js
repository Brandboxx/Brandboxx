import { useParams } from "react-router";

import { WithDraw } from "../FlexwithrawPage/withdraw";
import { useGetResquest } from "../../api/useRequestProcessor";

export const LockPageWithdraw = () => {
  const { id } = useParams();

  const { data: funds } = useGetResquest(
    `/lock-pocket/lock-pocket/${id}`,
    "funds"
  );

  console.log(funds, "funds");

  return (
    <>
      <WithDraw
        bg={"#FFF1E6"}
        cl={"rgba(251, 113, 6, 1)"}
        info={funds?.data}
        id={id}
      />
    </>
  );
};
