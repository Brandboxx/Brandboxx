import { useState } from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { GoBack } from "../../../components";

import { WithdrawModal } from "../components";

import { MainLayout } from "../../layout";

import { LOCKREVIEW, LOCKFUNDS } from "../../../constants/routes";

const WithDraw = () => {
  const history = useHistory();

  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? <WithdrawModal setModal={setModal} route={LOCKFUNDS} /> : null}
      <MainLayout>
        <Container>
          <GoBack title={"Go back"} route={LOCKREVIEW} />

          <Header>
            Your funds are
            <br /> safely locked !
          </Header>

          <Card>
            <CardHeader>
              <p>Laptop Lock</p>
              <img src={"/assets/svg/plan1.svg"} alt={""} />
            </CardHeader>

            <Info>
              <div>
                <AltInfoHeader>Balance</AltInfoHeader>
                <InfoBigText>N100,000</InfoBigText>
              </div>
              <div>
                <InfoHeader>Duration</InfoHeader>
                <InfoText>3 months</InfoText>
              </div>
            </Info>

            <Button onClick={() => setModal(true)}>Withdraw fund</Button>

            <Info>
              <div>
                <InfoHeader>Lock Date</InfoHeader>
                <InfoText>6th April 2021</InfoText>
              </div>
              <div>
                <InfoHeader>Maturity Date</InfoHeader>
                <InfoText>6th July 2021</InfoText>
              </div>
            </Info>

            <Info>
              <div>
                <InfoHeader>Status </InfoHeader>
                <InfoText>Ongoing</InfoText>
              </div>
              <div></div>
            </Info>
          </Card>
        </Container>
      </MainLayout>
    </>
  );
};

const Container = styled.div`
  padding: 35px 40px;
`;

const Header = styled.h1`
  font-size: 34px;
  color: rgba(0, 0, 0, 1);
  padding: 50px 0px;
`;

const Card = styled.div`
  background-color: rgba(255, 241, 230, 1);
  border: 5px;
  padding: 50px 60px;
  padding-right: 140px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 22px;
    color: rgba(50, 52, 56, 1);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  div {
    &:last-of-type {
      p {
        text-align: right;
      }
    }
  }
`;

const InfoHeader = styled.p`
  color: rgba(251, 113, 6, 1);
  font-size: 14px;
`;

const AltInfoHeader = styled.p`
  color: rgba(50, 52, 56, 1);
  font-size: 14px;
`;

const InfoBigText = styled.h3`
  font-size: 20px;
  color: rgba(251, 113, 6, 1);
  margin-top: 5px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  color: rgba(251, 113, 6, 1);
  border: 1px solid rgba(251, 113, 6, 1);
  font-size: 12px;
  margin-top: 30px;
  background: transparent;
  cursor: pointer;
`;

export { WithDraw };
