import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { Modal } from "../../../components";
import { ButtonContainer } from "../../../containers";
// import { useParams } from "react-router";
// import { useGetResquest } from "../../../api/useRequestProcessor";
import { currencyFormatter } from "../../../utils/numberFormater";
import { isToday } from "../../../utils/dateUtils";

const WithdrawModal = ({ setModal, route, amount, interest, fromFlex, endDate }) => {
  const history = useHistory();

  return (
    <Modal setModal={setModal}>
      <Container>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }} />
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setModal(false)}
            src={"/assets/svg/close.svg"}
            alt={""}
          />
        </div>

        <InfoContainer>
          <main>
            <img src={"/assets/svg/notice.svg"} alt={""} />
            <p>Notice</p>
          </main>

          {
            !fromFlex &&
              (isToday(endDate) || (new Date().getTime() > new Date(endDate).getTime())) ?
              <p>you are about to withdraw {currencyFormatter(amount)}.</p>
              : < p >
                Note that withdrawing this fund before maturity date,
                <br /> would warrant {interest}% off the balance
                <br /> i.e {currencyFormatter(amount - (interest / 100) * amount)} instead {currencyFormatter(amount)}
              </p>
          }

          <div>
            <ButtonContainer
              onClick={() => history.push(route)}
              width={"140px"}
            >
              Proceed
            </ButtonContainer>

            <ButtonContainer
              width={"140px"}
              onClick={() => {
                setModal(false)
              }}
              status={"alternate"}
            >
              Cancel
            </ButtonContainer>
          </div>
        </InfoContainer>
      </Container>
    </Modal >
  );
};

const Container = styled.div`
  padding: 20px 0px 60px 0px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  main {
    display: flex;
    align-items: center;
    margin-top: 50px;

    p {
      margin-left: 10px;
      color: rgba(20, 154, 155, 1) !important;
      font-size: 22px !important;
      margin-top: 0 !important;
    }
  }

  p {
    text-align: center;
    font-size: 16px;
    color: rgba(50, 52, 56, 1);
    margin-top: 20px;
    line-height: 25px;
  }

  div {
    display: flex;
    margin-top: 30px;
    button {
      height: 45px !important;
      border-radius: 4px !important;
      &:last-of-type {
        margin-left: 10px;
      }
    }
  }
`;

export { WithdrawModal };
