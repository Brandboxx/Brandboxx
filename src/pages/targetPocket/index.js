import { MainLayout } from "../layout";
import { GoBack, BigCard, SmallCard } from "../../components";

import { Header } from "../pocketPlans/style";

import {
  CardsContainer,
  TransactionContainer,
  Credit,
} from "../flexPocket/style";

import { Container, TabContainer, Tab, ActiveTab } from "../lockPocket/style";
import { useGetResquest } from "../../api/useRequestProcessor";
import { POCKETPLANS, TARGETSAVE } from "../../constants/routes";
import { useHistory } from "react-router-dom";

import { currencyFormatter } from "../../utils/numberFormater";


const TargetPocket = () => {
  const history = useHistory();
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );
  return (
    <MainLayout>
      <Container>
        <GoBack title={"Go Back"} route={POCKETPLANS} />
        <br />
        <Header>
          <main>
            <h1 style={{ color: "rgba(88, 2, 115, 1)" }}>Target Pocket</h1>
            <p>Here is an overview of how much you have locked</p>
          </main>
          <img src={"/assets/svg/header/notification.svg"} alt={""} />
        </Header>
        <CardsContainer>
          <div style={{ width: "55%" }}>
            <BigCard
              bg={"rgba(239, 236, 240, 1)"}
              cl={"rgba(88, 2, 115, 1)"}
              title={"Target Pocket Balance"}
              text={
                "keep money aside out of arms reach for as long as you desire, and earn up to 5% interest"
              }
              img={"/assets/svg/bigTarget.svg"}
              icon={"/assets/svg/targetPocket.svg"}
              btnText={"Set New Target"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.targetPocket) ??
                "N/A"
              }              
              onClick={() => history.push(TARGETSAVE)}
            />
          </div>
          <div style={{ width: "35%", marginTop: "30px" }}>
            <h1>Pocket Plans</h1>
            <SmallCard
              title={"Flex Pocket "}
              amount={
                currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"
              }
              content={
                "Flexible savings that alllows you to deposit and withdraw whenever you wish."
              }
              img={"/assets/svg/plan3.svg"}
              bg={"rgba(231, 245, 245, 1)"}
              cl={"rgba(20, 154, 155, 1)"}
            />

            <SmallCard
              title={"Lock Pocket"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.lockPocket) ?? "N/A"
              }              content={
                "keep money aside out of arms reach for as long as you desire, and earn up to 5% interest."
              }
              img={"/assets/svg/plan1.svg"}
              bg={"rgba(251, 113, 6, 0.1)"}
              cl={"rgba(251, 113, 6, 1)"}
            />
          </div>
        </CardsContainer>
        <TransactionContainer>
          <TabContainer>
            <Tab>
              <p style={{ color: "rgba(173, 174, 175, 1)" }}>Current</p>
            </Tab>
            <ActiveTab style={{ background: "rgba(88, 2, 115, 1)" }}>
              <p>Completed</p>
            </ActiveTab>
          </TabContainer>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <img src={"/assets/svg/circleTarget.svg"} alt={""} />
              <p style={{ marginLeft: "10px" }}>Laptop Lock</p>
            </span>
            <p>Target: N200,000</p>
            <p>
              <span style={{ fontSize: "12px", color: "rgba(88, 2, 115, 1)" }}>
                Balance
              </span>{" "}
              N500
            </p>
          </Credit>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src={"/assets/svg/circleTarget.svg"} alt={""} />
              <p style={{ marginLeft: "10px" }}>House Target</p>
            </span>
            <p>Target: N200,000</p>
            <p>
              {" "}
              <span style={{ fontSize: "12px", color: "rgba(88, 2, 115, 1)" }}>
                Interest
              </span>{" "}
              N500
            </p>
          </Credit>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src={"/assets/svg/circleTarget.svg"} alt={""} />
              <p style={{ marginLeft: "10px" }}>Casr Target</p>
            </span>
            <p>Target: N200,000</p>
            <p>
              {" "}
              <span style={{ fontSize: "12px", color: "rgba(88, 2, 115, 1)" }}>
                Interest
              </span>{" "}
              N500
            </p>
          </Credit>
        </TransactionContainer>
      </Container>
    </MainLayout>
  );
};

export { TargetPocket };
