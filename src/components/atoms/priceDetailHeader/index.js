import { HeaderCont, CircleContainer } from "./style";

const PriceDetailHeader = ({ amount }) => {
  return (
    <HeaderCont>
      <main>
        <CircleContainer>
          <img src={"/assets/svg/header/database.svg"} alt={""} />
        </CircleContainer>
        <aside>
          <p>Total Balance</p>
          <h3>{amount}</h3>
        </aside>
      </main>
      {/* <LinkInfo>View Centerpocket Account Details</LinkInfo> */}
    </HeaderCont>
  );
};

export { PriceDetailHeader };
