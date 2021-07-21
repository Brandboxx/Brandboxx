import React, { useState } from "react";

import { DashCard, Tab, Chart, Modal } from "../../components";
import { MainLayout } from "../../pages";
import { DashModalContainer } from "../../containers";
import {
  Header,
  CircleContainer,
  Info,
  LinkInfo,
  CardContainer,
  CardInfo,
} from "./style";

const Dashboard = () => {
  const [modal, setModal] = useState(true);
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {modal ? <DashModalContainer setModal={setModal} /> : ""}
      <MainLayout>
        <Info>
          <Header>
            <main>
              <CircleContainer>
                <img src={"/assets/svg/header/database.svg"} alt={""} />
              </CircleContainer>
              <aside>
                <p>Total Balance</p>
                <h3>N600,000</h3>
              </aside>
            </main>
            <LinkInfo>View Centerpocket Account Details</LinkInfo>
          </Header>

          <CardContainer>
            <DashCard
              title={"Flex Balance"}
              amount={"200,000"}
              img={"/assets/svg/dashCards/dash1.svg"}
              bg={"#E7F5F5"}
              cl={"#149A9B"}
            />
            <DashCard
              title={"Pocket Lock Balance"}
              amount={"200,000"}
              img={"/assets/svg/dashCards/dash2.svg"}
              bg={"#fb70063a"}
              cl={"#FB7106"}
            />
            <DashCard
              title={"Pocket Target Balance"}
              amount={"200,000"}
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
                <img src={"/assets/svg/dashCards/up.svg"} />
                <p>Pocket Flex credited</p>
              </main>
              <p>N20,000</p>
            </div>
            <div>
              <main>
                <img src={"/assets/svg/dashCards/down.svg"} />
                <p>Pocket Flex credited</p>
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
