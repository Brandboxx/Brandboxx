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

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
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
            amount={`₦${viewPocketBalance?.data?.total ?? "N/A"}`}
          />
          <CardContainer>
            <DashCard
              title={"Flex Balance"}
              amount={`₦${viewPocketBalance?.data?.flexPocket ?? "N/A"}`}
              img={"/assets/svg/dashCards/dash1.svg"}
              bg={"#E7F5F5"}
              cl={"#149A9B"}
            />
            <DashCard
              title={"Pocket Lock Balance"}
              amount={`₦${viewPocketBalance?.data?.lockPocket ?? "N/A"}`}
              img={"/assets/svg/dashCards/dash2.svg"}
              bg={"#fb70063a"}
              cl={"#FB7106"}
            />
            <DashCard
              title={"Pocket Target Balance"}
              amount={`₦${viewPocketBalance?.data?.targetPocket ?? "N/A"}`}
              img={"/assets/svg/dashCards/dash3.svg"}
              bg={"#59027331"}
              cl={"#580273"}
            />
          </CardContainer>

          <Tab toggle={toggle} setToggle={setToggle} />

          <Chart />

          <CardInfo>
            <h3>Recent Transactions</h3>
            <div>
              <main>
                <img src={"/assets/svg/dashCards/up.svg"} alt={""} />
                <p>Pocket Flex credited</p>
              </main>
              <p>N20,000</p>
            </div>
            <div>
              <main>
                <img src={"/assets/svg/dashCards/down.svg"} alt={""} />
                <p>Pocket Flex debited</p>
              </main>
              <p>N20,000</p>
            </div>
          </CardInfo>
        </Info>
      </MainLayout>
    </>
  );
};

export { Dashboard };
