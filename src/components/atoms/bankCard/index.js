import styled from "styled-components/macro";

const BankCard = ({ img, banks, bankData, checked, setBank }) => {

  return (
    <Container>
      <Header>Your fund would be sent to your Bank</Header>

      {banks?.map((item) =>
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop: 10 }} onClick={(e) => setBank(item._id)}>
          <input type={"checkbox"} checked={checked === item._id ? "checked" : false} style={{ marginRight: 20 }} />

          <div>
            <img src={img} alt={""} width={26} height={26} />
            <main>
              <Number>{item.account_number}</Number>
              <p>{bankData.map((data) => data.code === item?.account_bank && data.name)}</p>
            </main>
          </div>
        </div>
      )}
    </Container >
  );
};

const Container = styled.div`
  padding: 20px 40px;
  border-radius: 5px;
  background: rgba(231, 245, 245, 1);
  div {
    display: flex;
    align-items: center;

    img {
      margin-top: 15px;
    }
    main {
      margin-top: 20px;
      margin-left: 10px;
      p {
        &:last-of-type {
          font-size: 12px;
          color: rgba(50, 52, 56, 0.4);
          margin-top: 5px;
        }
      }
    }
  }
`;

const Number = styled.p`
  font-size: 16px;
  color: rgba(50, 52, 56, 0.8);
`;

const Header = styled.p`
  font-size: 14px;
  color: rgba(50, 52, 56, 0.6);
`;

export { BankCard };
