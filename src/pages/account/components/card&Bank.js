import { useState } from "react";
import styled from "styled-components/macro";
import { useGetResquest } from "../../../api/useRequestProcessor";
import { Container, Title } from "./styles";
import bankData from "../bankData.json";

const CardBank = ({ setModal }) => {
  const [current, setCurrent] = useState(1);

  const getCurrentId = (id) => {
    setCurrent(id);
  };

  const { data: banks } = useGetResquest("/bank-accounts/all-banks", "banks");

  console.log(banks, "banks");

  return (
    <Container>
      {/* <Title>Card</Title>
      {card.map((card) => (
        <Card key={card.id} onClick={() => getCurrentId(card.id)}>
          <img src={card.img} alt={""} />
          <p style={{ marginLeft: "20px" }}>{card.name}</p>
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
        + Add Another Card
      </p>
      <br />
      <br /> */}
      <Title>Bank</Title>
      {banks?.data?.map((bank) => (
        <Bank key={bank._id}>
          <img src={"/assets/svg/bankToken.svg"} alt={""} />
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

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  margin-top: 50px;
  cursor: pointer;
`;

const Mark = styled.div`
  width: 26px;
  height: 26px;
  border: 1px solid rgba(50, 52, 56, 0.2);
  margin-right: 5px;
`;

const Bank = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  margin-top: 50px;
  cursor: pointer;
  p {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export { CardBank };
