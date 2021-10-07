import { useState } from "react";
import styled from "styled-components/macro";
import { GoBack } from "../../components";
import { WithdrawModal } from "../lockPocket/components";
import { MainLayout } from "../layout";
import { FLEXPOCKET } from "../../constants/routes";
import { currencyFormatter } from "../../utils/numberFormater";
import { useHistory } from "react-router";

const WithDraw = ({ bg, cl, info, id, fromFlex, title, amount }) => {

  const [modal, setModal] = useState(false);
  const { push } = useHistory();

  return (
    <>
      {modal ? (
        <WithdrawModal
          amount={info?.amount}
          interest={info?.interest}
          setModal={setModal}
          fromFlex={fromFlex}
          route={`/pocket_plans/withdraw_locked_funds/${id}`}
        />
      ) : null}
      <MainLayout>
        <Container>
          <GoBack title={"Go back"} route={FLEXPOCKET} />

          <Header>
            Your funds are
            <br /> safely locked !
          </Header>

          <Card bg={bg} cl={cl}>
            <CardHeader>
              <p>{fromFlex ? " Flex Pocket" : title || info?.title || 'Laptop Lock'}</p>
              <img src={"/assets/svg/plan1.svg"} alt={""} />
            </CardHeader>

            <Info cl={cl}>
              <div>
                <AltInfoHeader>Balance</AltInfoHeader>
                <InfoBigText cl={cl}>
                  {(amount || info?.amount) > 0 ? `${currencyFormatter(amount) || currencyFormatter(info?.amount)}` : `loading...`}
                </InfoBigText>
              </div>

              {
                !fromFlex ?
                  <div cl={cl}>
                    <InfoHeader cl={cl}>Duration</InfoHeader>
                    <InfoText>{info?.duration ?? "loading..."}</InfoText>
                  </div>
                  :
                  <div />
              }
            </Info>

            {
              !fromFlex ?
                <>
                  <Button onClick={() => setModal(true)} cl={cl}>
                    Withdraw fund
                  </Button>

                  <Info cl={cl}>
                    <div>
                      <InfoHeader cl={cl}>Lock Date</InfoHeader>
                      <InfoText>{new Date(info?.createdAt).toDateString()}</InfoText>
                    </div>
                    <div>
                      <InfoHeader cl={cl}>Maturity Date</InfoHeader>
                      <InfoText>{info?.maturity}</InfoText>
                    </div>
                  </Info>

                  <Info cl={cl}>
                    <div>
                      <InfoHeader cl={cl}>Status </InfoHeader>
                      <InfoText>
                        {info?.pocket_status === 0 ? "Ongoing" : "Completed"}
                      </InfoText>
                    </div>
                    <div></div>
                  </Info>
                </>
                :
                <Button onClick={() => push("/pocket_plans/withdraw_funds")} cl={cl}>
                  Withdraw fund
                </Button>
            }

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
  color: ${({ cl }) => cl};
  padding: 50px 0px;
`;

const Card = styled.div`
  background-color: ${({ bg }) => bg};
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
    color: ${({ cl }) => cl};
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
  color: ${({ cl }) => cl};
  font-size: 14px;
`;

const AltInfoHeader = styled.p`
  color: rgba(50, 52, 56, 1);
  font-size: 14px;
`;

const InfoBigText = styled.h3`
  font-size: 20px;
  color: ${({ cl }) => cl};

  margin-top: 5px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  color: ${({ cl }) => cl};
  border: 1px solid ${({ cl }) => cl};
  font-size: 12px;
  margin-top: 30px;
  background: transparent;
  cursor: pointer;
`;

export { WithDraw };
