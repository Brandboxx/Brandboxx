import { useHistory } from "react-router-dom";

import { PriceDetailHeader, PocketCards } from "../../components";
import { MainLayout } from "../../pages";
import { Wrapper, Header, Padding, CardContainer, Card } from "./style";
import { useGetResquest } from "../../api/useRequestProcessor";

import * as ROUTES from "../../constants/routes";
import { currencyFormatter } from "../../utils/numberFormater";
import { toast } from "react-toastify";

const PocketPlans = () => {
  const history = useHistory();
  const { data: viewPocketBalance } = useGetResquest(
    "/users/view-pocket-balance",
    ["users", "view-pocket-balance"]
  );

  //console.log({ viewPocketBalance })
  return (
    <MainLayout>
      <Wrapper>
        <Header>
          <main>
            <h1>Choose a Pocket Plan</h1>
            <p>Here is an overview of your saving</p>
          </main>
          <img
            src={"/assets/svg/header/notification.svg"}
            alt={""}
            onClick={() => toast("No notification yet!", { delay: 1000 })}
          />
        </Header>
        <Padding>
          <PriceDetailHeader
            amount={currencyFormatter(viewPocketBalance?.data?.total) ?? "N/A"}
          />
        </Padding>
        <CardContainer>
          <Card>
            <PocketCards
              onClick={() => history.push(ROUTES.FLEXPOCKET)}
              img={"/assets/svg/plan3.svg"}
              title={"Flex Pocket "}
              text={
                "Flexible savings that allows you to deposit and withdraw whenever you wish"
              }
              stat={"25%"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.flexPocket) ?? "N/A"
              }
              bg={"#E7F5F5"}
              cl={"#149A9B"}
            />
          </Card>
          <Card>
            <PocketCards
              onClick={() => history.push(ROUTES.LOCKPOCKET)}
              img={"/assets/svg/plan1.svg"}
              title={"Lock Pocket "}
              text={
                "Keep money aside out of arms reach for as long as you desire, and earn up to 5% interest"
              }
              stat={"25%"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.lockPocket) ?? "N/A"
              }
              bg={"#FFF1E6"}
              cl={"#FB7106"}
            />
          </Card>

          <Card>
            <PocketCards
              onClick={() => history.push(ROUTES.TARGETPOCKET)}
              img={"/assets/svg/plan2.svg"}
              title={"Target Pocket"}
              text={
                "Reach your desired savings goal, with consistent periodic savings."
              }
              stat={"25%"}
              amount={
                currencyFormatter(viewPocketBalance?.data?.targetPocket) ??
                "N/A"
              }
              bg={"#EEE6F1"}
              cl={"#580273"}
            />
          </Card>
        </CardContainer>
      </Wrapper>
    </MainLayout>
  );
};

export { PocketPlans };
