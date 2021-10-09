// import { useEffect } from "react";
import { useGetResquest } from "../../api/useRequestProcessor";
import { WithDraw } from "./withdraw";

export const WithdrawPage = () => {

  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );

  return (
    <WithDraw bg={"rgba(231, 245, 245, 1)"} cl={"rgba(20, 154, 155, 1)"} fromFlex amount={viewPocketBalance?.data?.flexPocket} />
  );
};
