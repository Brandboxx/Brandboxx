import {
  Container,
  CardsContainer,
  TransactionContainer,
  Credit,
} from "./style";
import { useGetResquest } from "../../api/useRequestProcessor";
import { GoBack, BigCard, SmallCard } from "../../components";

import { Header } from "../pocketPlans/style";

import { MainLayout } from "../layout";
import { useHistory } from "react-router-dom";

import { POCKETPLANS, ADDMONEY } from "../../constants/routes";
import { currencyFormatter } from "../../utils/numberFormater";
import { getDateTime } from "../../utils/dateUtils";

const FlexPocket = () => {
  const history = useHistory();
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );
  const { data: flexTransactions } = useGetResquest(
    "/deposit/view-recent-transactions?plan_type=flex pocket&plan_code=01",
    "flexTransactions"
  );
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
              amount={currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"}
              // icon={"/assets/svg/withdraw.svg"}
              // btnText={"Withdraw"}
              handleClick={() => history.push(ADDMONEY)}
            />
          </div>
          <div style={{ width: "35%", marginTop: "30px" }}>
            <h1>Pocket Plans</h1>
            <SmallCard
              routeTo={"/pocket_plans/lock_pocket"}
              title={"Lock Pocket"}
              amount={`₦${viewPocketBalance?.data?.lockPocket ?? "N/A"}`}
              content={
                "keep money aside out of arms reach for as long as you desire, and earn up to 5% interest"
              }
              img={"/assets/svg/plan1.svg"}
              bg={"rgba(251, 113, 6, 0.2)"}
              cl={"rgba(251, 113, 6, 1)"}
            />

            <SmallCard
              title={"Target Pocket"}
              amount={`₦${viewPocketBalance?.data?.targetPocket ?? "N/A"}`}
              content={
                "Reach your desired savings goal, with consistent periodic savings."
              }
              img={"/assets/svg/plan2.svg"}
              bg={"rgba(88, 2, 115, 0.2)"}
              cl={"rgba(88, 2, 115, 1)"}
              routeTo={"/pocket_plans/target_pocket"}
            />
          </div>
        </CardsContainer>
        <TransactionContainer>
          <h4 style={{ fontSize: "18px", paddingBottom:20 }}>Recent Transaction</h4>
          {flexTransactions?.data.map((transaction, index) => {
            return (
              <Credit key={index}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  {transaction.action === "deposit" ? (
                    <img src={"/assets/svg/credit.svg"} alt={""} />
                  ) : (
                    <img src={"/assets/svg/debit.svg"} alt={""} />
                  )}

                  <p style={{ marginLeft: "10px" }}>
                    Flex pocket
                    {transaction.action === "deposit"
                      ? " credited"
                      : " debited"}
                  </p>
                </span>
                <p>{getDateTime(transaction.createdAt).toLocaleString()}</p>
                <p>{currencyFormatter(transaction.amount) ?? "N?A"}</p>
              </Credit>
            );
          })}
          {!flexTransactions?.data.length && <>No recent transaction yet</>}
        </TransactionContainer>
      </Container>
    </MainLayout>
  );
};

export { FlexPocket };
