import { HeaderCont, CircleContainer, LinkInfo } from "./style";

const PriceDetailHeader = () => {
  return (
    <HeaderCont>
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
    </HeaderCont>
  );
};

export { PriceDetailHeader };
