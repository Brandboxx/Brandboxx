import { MainLayout } from "../layout";
import { GoBack, BigCard, SmallCard } from "../../components";

import { Header } from "../pocketPlans/style";

import {
  CardsContainer,
  TransactionContainer,
  Credit,
} from "../flexPocket/style";
import { useGetResquest } from "../../api/useRequestProcessor";
import { Container, TabContainer, Tab, ActiveTab } from "./style";

import { POCKETPLANS, LOCKPAGE } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import { currencyFormatter } from "../../utils/numberFormater";
import { useState } from "react";
import { useEffect } from "react";

const LockPocket = () => {
  const history = useHistory();
  const [lockPocketHistory, setLockPocketHistory] = useState(undefined);
  const [selectedTab, setSelectedTab] = useState(0);
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );
  const { data: currentLockPockets } = useGetResquest(
    "/lock-pocket/current-lock-pockets",
    ["lock-pocket", "lock-pockets"],
    selectedTab === 0
  );
  const { data: completedLockPockets } = useGetResquest(
    "/lock-pocket/completed-lock-pockets",
    ["lock-pocket", "completed-lock-pockets"],
    selectedTab === 1
  );

  const Current = selectedTab ? Tab : ActiveTab;
  const Completed = !selectedTab ? Tab : ActiveTab;

  useEffect(() => {
    selectedTab === 0
      ? setLockPocketHistory(currentLockPockets)
      : setLockPocketHistory(completedLockPockets);
  }, [currentLockPockets, completedLockPockets, selectedTab]);

  return (
    <MainLayout>
      <Container>
        <GoBack title={"Go Back"} route={POCKETPLANS} />
        <br />
        <Header>
          <main>
            <h1 style={{ color: "rgba(251, 113, 6, 1)" }}>Lock Pocket</h1>
            <p>Here is an overview of how much you have locked</p>
          </main>
          <img src={"/assets/svg/header/notification.svg"} alt={""} />
        </Header>
        <CardsContainer>
          <div style={{ width: "55%" }}>
            <BigCard
              bg={"rgba(255, 241, 230, 1)"}
              cl={"rgba(251, 113, 6, 1)"}
              title={"Lock Pocket Balance"}
              text={
                "keep money aside out of arms reach for as long as you desire, and earn up to 5% interest"
              }
              img={"/assets/svg/bigLock.svg"}
              icon={"/assets/svg/lockpocket.svg"}
              btnText={"Lock Money"}
              amount={
                "Last lock amount: " + currencyFormatter(viewPocketBalance?.data?.lockPocket) ?? "N/A"
              }
              onClick={() => history.push(LOCKPAGE)}
            />
          </div>
          <div style={{ width: "35%", marginTop: "30px" }}>
            <h1>Pocket Plans</h1>
            <SmallCard
              routeTo={"/pocket_plans/flex_pocket"}
              title={"Flex Pocket "}
              amount={
                currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"
              }
              content={
                "Flexible savings that alllows you to deposit and withdraw whenever you wish"
              }
              img={"/assets/svg/plan3.svg"}
              bg={"rgba(231, 245, 245, 1)"}
              cl={"rgba(20, 154, 155, 1)"}
            />

            <SmallCard
              title={"Target Pocket"}
              routeTo={"/pocket_plans/target_pocket"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.targetPocket) ??
                "N/A"
              }
              content={
                "Reach your desired savings goal, with consistent periodic savings."
              }
              img={"/assets/svg/plan2.svg"}
              bg={"rgba(88, 2, 115, 0.2)"}
              cl={"rgba(88, 2, 115, 1)"}
            />
          </div>
        </CardsContainer>
        <TransactionContainer>
          <TabContainer>
            <Current onClick={() => setSelectedTab(0)}>
              <p>Current</p>
            </Current>
            <Completed onClick={() => setSelectedTab(1)}>
              <p>Completed</p>
            </Completed>
          </TabContainer>
          {lockPocketHistory?.data?.map((pocket, index) => {
            return (
              <Credit key={index}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img src={"/assets/svg/circleLock.svg"} alt={""} />
                  <p style={{ marginLeft: "10px" }}>{pocket.title} Lock</p>
                </span>
                <p>Lock: {currencyFormatter(pocket.amount)}</p>
                <p>
                  <span style={{ fontSize: "12px", color: "#FB7106", marginRight: 5 }}>
                    Interest :
                  </span>
                  {currencyFormatter(pocket.interest) ?? "N/A"}
                </p>
              </Credit>
            );
          })}
          {!lockPocketHistory?.data.length && <>No recent transaction yet</>}
        </TransactionContainer>
      </Container>
    </MainLayout>
  );
};

export { LockPocket };
