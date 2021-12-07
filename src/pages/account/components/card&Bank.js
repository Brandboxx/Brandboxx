// import { useState } from "react";
import styled from "styled-components/macro";
import { useGetResquest } from "../../../api/useRequestProcessor";
import { Container, Title } from "./styles";
import bankData from "../bankData.json";

const CardBank = ({ setModal }) => {

  const { data: banks } = useGetResquest("/bank-accounts/all-banks", "banks", true);
  // const { data: cards } = useGetResquest("/cards/all-cards", "cards", true);
  // const [current, setCurrent] = useState(1);

  // const getCurrentId = (id) => {
  //   setCurrent(id);
  // };

  // console.log({ cards })

  return (
    <Container>
      {/* <Title>Card</Title>
      {cards?.data?.map((card) => (
        <Card key={card.id} onClick={() => getCurrentId(card.id)}>
          <img src={card.img} alt={""} />
          <p style={{ marginLeft: "20px" }}>{card.first_6digits + " ***** " + card.last_4digits}</p>
          <div style={{ flex: 1 }} />
          {current === card.id ? (
            <img src={"/assets/svg/mark.svg"} alt={""} />
          ) : (
            <Mark />
          )}
        </Card>
      ))}
      <br />
      <br />
      <br />
     <p style={{ color: "rgba(20, 154, 155, 1)", cursor: "pointer" }}>
        Cards will be added on first use
      </p> 
      <br />
      <br /> */}

      <Title>Bank</Title>
      {banks?.data?.map((bank) => (
        <Bank key={bank._id}>
          <img src={"/assets/svg/access.svg"} width={40} height={40} alt={""} />
          <p>{bank?.account_number}</p>
          <div style={{ flex: 1 }} />
          <p>
            {bankData.map(
              (data) => data.code === bank.account_bank && data.name
            )}
          </p>
        </Bank>
      ))}
      <br />
      <br />
      <br />
      <p
        onClick={() => setModal(true)}
        style={{ color: "rgba(20, 154, 155, 1)", cursor: "pointer" }}
      >
        + Add Another Bank
      </p>
    </Container>
  );
};

// const Card = styled.div`
//   display: flex;
//   align-items: center;
//   width: 400px;
//   margin-top: 50px;
//   cursor: pointer;
// `;

// const Mark = styled.div`
//   width: 26px;
//   height: 26px;
//   border: 1px solid rgba(50, 52, 56, 0.2);
//   margin-right: 5px;
// `;

const Bank = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin-top: 30px;
  p {
    margin-left: 20px;
  }
`;

export { CardBank };
