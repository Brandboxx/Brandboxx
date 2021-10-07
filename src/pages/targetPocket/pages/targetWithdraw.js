import { useState } from "react";
import styled from "styled-components/macro";
import { GoBack } from "../../../components";
import { WithdrawModal } from "../../lockPocket/components";
import { MainLayout } from "../../layout";
import { TARGETREVIEW, LOCKFUNDS } from "../../../constants/routes";
import { useGetResquest } from "../../../api/useRequestProcessor";
import { useParams } from "react-router";
import { currencyFormatter } from "../../../utils/numberFormater";
import { useEffect } from "react";

const TargetWithDraw = () => {

  const { id } = useParams();
  // const [enable, setEnable] = useState(true);
  // const [data, setFunds] = useState(null)

  const { data: funds } = useGetResquest(
    `/target-pocket/target-pocket/${id}`,
    "funds",
    true,
  );
  
  console.log(funds)

  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? <WithdrawModal setModal={setModal} route={`/pocket_plans/withdraw_target_funds/${id}`} interest={25} amount={funds?.data?.amount} /> : null}
      <MainLayout>
        <Container>
          <GoBack title={"Go back"} route={TARGETREVIEW} />

          <Header>
            Meet your saving <br />
            goals !
          </Header>

          <Card>
            <CardHeader>
              <p>Investment Funds</p>
              <img src={"/assets/svg/plan2.svg"} alt={""} />
            </CardHeader>

            <Info>
              <div>
                <AltInfoHeader>Target Amount</AltInfoHeader>
                <InfoBigText>{currencyFormatter(funds?.data?.amount ?? "loading...")}</InfoBigText>
              </div>
              {/* <div>
                <InfoHeader>Target Amount</InfoHeader>
                <InfoText>200,000</InfoText>
              </div> */}
            </Info>

            <Button onClick={() => setModal(true)}>Withdraw fund</Button>

            {/* <Info>
              <div>
                <InfoHeader>Status</InfoHeader>
                <InfoText>Ongoing</InfoText>
              </div>
              <div>
                <InfoHeader>Method of payment</InfoHeader>
                <InfoText>Weekly</InfoText>
              </div>
            </Info> */}

            <Info>
              <div>
                <InfoHeader>Start Date </InfoHeader>
                <InfoText>{funds?.data?.start ?? "loading..."}</InfoText>
              </div>
              <div />
            </Info>

            <Info>
              <div>
                <InfoHeader>End Date </InfoHeader>
                <InfoText>{funds?.data?.end ?? "loading..."}</InfoText>
              </div>

              <div />
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
  background-color: rgba(239, 236, 240, 1);
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
  color: rgba(107, 31, 131, 1);
  font-size: 14px;
`;

const AltInfoHeader = styled.p`
  color: rgba(50, 52, 56, 1);
  font-size: 14px;
`;

const InfoBigText = styled.h3`
  font-size: 20px;
  color: rgba(107, 31, 131, 1);
  margin-top: 5px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  color: rgba(107, 31, 131, 1);
  border: 1px solid rgba(107, 31, 131, 1);
  font-size: 12px;
  margin-top: 30px;
  background: transparent;
  cursor: pointer;
`;

export { TargetWithDraw };
