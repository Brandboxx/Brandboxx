import React, { useState } from "react";

import {
  DashCard,
  Tab,
  Chart,
  Header,
  SuccessModal,
  PriceDetailHeader,
} from "../../components";
import { MainLayout } from "../../pages";
import { DashModalContainer } from "../../containers";
import { Info, CardContainer, CardInfo } from "./style";
import { useGetResquest } from "../../api/useRequestProcessor";
import { currencyFormatter } from "../../utils/numberFormater";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );

  const { data: flexTransactions } = useGetResquest(
    "/users/view-recent-transactions",
    "flexTransactions"
  );

  const [successModal, setSuccessModal] = useState(false);

  return (
    <>
      {modal ? (
        <DashModalContainer
          setModal={setModal}
          setSuccessModal={setSuccessModal}
        />
      ) : (
        ""
      )}
      {successModal ? <SuccessModal setSuccessModal={setSuccessModal} /> : ""}
      <MainLayout>
        <Header setModal={setModal} />
        <Info>
          <PriceDetailHeader
            amount={currencyFormatter(viewPocketBalance?.data?.total) ?? "N/A"}
          />
          <CardContainer>
            <DashCard
              title={"Flex Balance"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"
              }
              img={"/assets/svg/dashCards/dash1.svg"}
              bg={"#E7F5F5"}
              cl={"#149A9B"}
              routeTo={"/pocket_plans/flex_pocket"}
            />
            <DashCard
              title={"Pocket Lock Balance"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.lockPocket) ?? "N/A"
              }
              img={"/assets/svg/dashCards/dash2.svg"}
              bg={"#fb70063a"}
              cl={"#FB7106"}
              routeTo={"/pocket_plans/lock_pocket"}
            />
            <DashCard
              title={"Pocket Target Balance"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.targetPocket) ??
                "N/A"
              }
              img={"/assets/svg/dashCards/dash3.svg"}
              bg={"#59027331"}
              cl={"#580273"}
              routeTo={"/pocket_plans/target_pocket"}
            />
          </CardContainer>

          <Tab toggle={toggle} setToggle={setToggle} />

          <Chart />

          <CardInfo>
            <h3>Recent Transactions (Flex)</h3>
            {flexTransactions?.data.map((transaction, index) => {
              return (
                <div>
                  <main>
                    {transaction.action === "deposit" ? (
                      <img src={"/assets/svg/dashCards/up.svg"} alt={""} />
                    ) : (
                      <img src={"/assets/svg/dashCards/down.svg"} alt={""} />
                    )}

                    <p>
                      {transaction.plan_type +" "}
                      {transaction.action === "deposit"
                        ? " credited "
                        : " debited "}
                    </p>
                  </main>
                  <p> {currencyFormatter(transaction.amount) ?? "N?A"}</p>
                </div>
              );
            })}
            {!flexTransactions?.data.length && <>No recent transaction yet</>}
          </CardInfo>
        </Info>
      </MainLayout>
    </>
  );
};

export { Dashboard };
