import { useState } from "react";

import {
  Container,
  TextInfo,
  InputBox,
  ToggleBadges,
  Badge,
  Interest,
} from "./style";

import { LockModal } from "../components";

import { GoBack } from "../../../components";

import { InputContainer, ButtonContainer } from "../../../containers";
import { MainLayout } from "../../layout";

import { LOCKPOCKET, LOCKREVIEW } from "../../../constants/routes";
import { useHistory } from "react-router-dom";

const LockPage = () => {
  const badges = [
    {
      id: 1,
      number: 3,
      unit: "months",
    },
    {
      id: 2,
      number: 6,
      unit: "months",
    },
    {
      id: 3,
      number: 9,
      unit: "months",
    },
    {
      id: 4,
      number: 1,
      unit: "year",
    },
  ];

  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(1);

  const history = useHistory();

  const getCurrentId = (id) => {
    setCurrentId(id);
  };

  const [method, setMethod] = useState("Flex pocket (N200,000)");

  const handleMethodName = (name) => {
    setMethod(name);
  };

  return (
    <>
      {modal ? (
        <LockModal
          handleMethodName={handleMethodName}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        ""
      )}
      <MainLayout>
        <div style={{ padding: "40px 30px", paddingBottom: "10px" }}>
          <GoBack title={"Go Back"} route={LOCKPOCKET} />
        </div>
        <Container>
          <TextInfo>
            <h1 style={{ paddingBottom: "20px" }}>
              Lock Your <br />
              Money
            </h1>
            <p style={{ lineHeight: "25px", color: "rgba(50, 52, 56, 0.6)" }}>
              keep money aside out of arms reach for as long as you desire, and
              earn up to 5% interest
            </p>
          </TextInfo>
          <InputBox>
            <InputContainer
              placeHolder={"Enter Title of Lock"}
              label={"What are you saving for?"}
            />
            <div style={{ marginTop: "50px" }}>
              <InputContainer
                placeHolder={"Enter Title of Lock"}
                label={"How much do you want to lock?"}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <p>How long would you want to lock?</p>
              <ToggleBadges>
                {badges.map((badge) => (
                  <Badge
                    onClick={() => getCurrentId(badge.id)}
                    bg={
                      currentId === badge.id
                        ? "rgba(90, 176, 255, 0.1)"
                        : "rgba(50, 52, 56, 0.05)"
                    }
                    cl={
                      currentId === badge.id
                        ? "rgba(20, 154, 155, 1)"
                        : "rgba(50, 52, 56, 0.8)"
                    }
                    key={badge.id}
                  >
                    {badge.number + " " + badge.unit}
                  </Badge>
                ))}
              </ToggleBadges>
              <InputContainer placeHolder={"Enter your choice"} />
            </div>
            <Interest>
              <p>Interest Rate: 25%</p>
              <p> Maturity Date: Jul 20, 2021 </p>
              <p>Estimated Amount: N10,031</p>
            </Interest>
            <div
              style={{
                marginTop: "50px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <img
                onClick={() => setModal(true)}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50px",
                  cursor: "pointer",
                }}
                src={"/assets/svg/chevronDown.svg"}
                alt={""}
              />
              <InputContainer
                value={method}
                label={"Choose payment method"}
                onClick={() => setModal(true)}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <ButtonContainer
                width="100%"
                onClick={() => history.push(LOCKREVIEW)}
              >
                See review
              </ButtonContainer>
            </div>
          </InputBox>
        </Container>
      </MainLayout>
    </>
  );
};

export { LockPage };
