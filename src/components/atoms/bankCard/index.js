import styled from "styled-components/macro";

const BankCard = ({ bank, number, img }) => {
  return (
    <Container>
      <Header>Your fund would be sent to your {bank}</Header>
      <div>
        <img src={img} alt={""} />
        <main>
          <Number>{number}</Number>
          <p>{bank}</p>
        </main>
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ flex: 1 }} />
        {/* <p
          style={{
            fontSize: "14px",
            color: "rgba(20, 154, 155, 1)",
            cursor: "pointer",
          }}
        >
          Change Bank
        </p>
      */}
      </div>
    </Container>
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
