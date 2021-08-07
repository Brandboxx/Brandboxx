import {
  Container,
  CardsContainer,
  TransactionContainer,
  Credit,
} from "./style";

import { GoBack, BigCard, SmallCard } from "../../components";

import { Header } from "../pocketPlans/style";

import { MainLayout } from "../layout";
import { useHistory } from "react-router-dom";

import { POCKETPLANS, ADDMONEY } from "../../constants/routes";

const FlexPocket = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <div style={{ marginTop: "35px", marginLeft: "30px" }}>
        <GoBack title={"Go Back"} route={POCKETPLANS} />
      </div>
      <Container>
        <Header>
          <main>
            <h1>Flex Pocket</h1>
            <p>Here is an overview of your saving</p>
          </main>
          <img src={"/assets/svg/header/notification.svg"} alt={""} />
        </Header>
        <CardsContainer>
          <div style={{ width: "55%" }}>
            <BigCard
              bg={"rgba(231, 245, 245, 1)"}
              cl={"rgba(20, 154, 155, 1)"}
              title={"Flex Pocket Balance"}
              text={
                "Flexible savings that alllows you to deposit and withdraw whenever you wish"
              }
              img={"/assets/svg/bigLogo.svg"}
              amount={"100,000"}
              icon={"/assets/svg/withdraw.svg"}
              btnText={"Withdraw"}
              handleClick={() => history.push(ADDMONEY)}
            />
          </div>
          <div style={{ width: "35%", marginTop: "30px" }}>
            <h1>Pocket Plans</h1>
            <SmallCard
              title={"Lock Pocket"}
              amount={"100,000"}
              content={
                "keep money aside out of arms reach for as long as you desire, and earn up to 5% interest"
              }
              img={"/assets/svg/plan1.svg"}
              bg={"rgba(251, 113, 6, 0.2)"}
              cl={"rgba(251, 113, 6, 1)"}
            />

            <SmallCard
              title={"Target Pocket"}
              amount={"100,000"}
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
          <h4 style={{ fontSize: "18px" }}>Recent Transaction</h4>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <img src={"/assets/svg/credit.svg"} />
              <p style={{ marginLeft: "10px" }}>Flex pocket credited</p>
            </span>
            <p>Thurs 23/10/2020 12:12</p>
            <p>N20,000</p>
          </Credit>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src={"/assets/svg/debit.svg"} />
              <p style={{ marginLeft: "10px" }}>Flex pocket debited</p>
            </span>
            <p>Thurs 23/10/2020 12:12</p>
            <p>N20,000</p>
          </Credit>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src={"/assets/svg/credit.svg"} />
              <p style={{ marginLeft: "10px" }}>Flex pocket credited</p>
            </span>
            <p>Thurs 23/10/2020 12:12</p>
            <p>N20,000</p>
          </Credit>
          <Credit>
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src={"/assets/svg/debit.svg"} />
              <p style={{ marginLeft: "10px" }}>Flex pocket debited</p>
            </span>
            <p>Thurs 23/10/2020 12:12</p>
            <p>N20,000</p>
          </Credit>
        </TransactionContainer>
      </Container>
    </MainLayout>
  );
};

export { FlexPocket };
