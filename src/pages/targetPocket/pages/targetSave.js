import { useState } from "react";

import { useHistory } from "react-router-dom";

import {
  Container,
  TextInfo,
  InputBox,
  ToggleBadges,
  Badge,
  Interest,
} from "../../lockPocket/pages/style";

import { LockModal } from "../../lockPocket/components";

import { GoBack } from "../../../components";

import { InputContainer, ButtonContainer } from "../../../containers";
import { MainLayout } from "../../layout";

import { LOCKPOCKET, TARGETREVIEW } from "../../../constants/routes";

const TargetSave = () => {
  const history = useHistory();
  const [targetSaveValue, setTargetSaveValue] = useState({
    plan_type: "",
    duration: "",
    start: "",
    end: "",
    interest: 0,
    amount: 0,
    mode: ""
  })

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

  const otherBadges = [
    {
      id: 1,
      mode: "daily",
    },
    {
      id: 2,
      mode: "weekly",
    },
    {
      id: 3,
      mode: "monthly",
    },
    {
      id: 4,
      mode: "yearly",
    },
  ];

  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(1);

  const getCurrentId = (id) => {
    setCurrentId(id);
  };

  // const [method, setMethod] = useState("Flex pocket (N200,000)");

  // const handleMethodName = (name) => {
  //   setMethod(name);
  // };

  const handleTargetSaveChange = (e) => {
    setTargetSaveValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log("value",targetSaveValue)
  }

  return (
    <>
      {modal ? (
        <LockModal
          // handleMethodName={handleMethodName}
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
              Set Target To
              <br /> Save for
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
              name="plan_type"
              value={targetSaveValue.planType}
              onChange={handleTargetSaveChange}
            />
            <div style={{ marginTop: "50px" }}>
              <InputContainer
                placeHolder={"Enter amount to target"}
                label={"How much do you want to target?"}
                name="amount"
                value={targetSaveValue.amount}
                onChange={handleTargetSaveChange}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <p>How will be the duration of lock?</p>
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
              <InputContainer 
                placeHolder={"Enter your choice"}
                name="mode"
                value={targetSaveValue.mode}
                onChange={handleTargetSaveChange}
                />
            </div>
            <Interest>
              <p>N5,000 x 30days = N150,000</p>
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
                value={targetSaveValue.start}
                label={"What date would you start saving?"}
                name="start"
                type="date"
                onChange={handleTargetSaveChange}
                // onClick={() => setModal(true)}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <p>Set mode of target</p>
              <ToggleBadges>
                {otherBadges.map((badge) => (
                  <Badge
                    onClick={() => getCurrentId(badge.id)}
                    bg={
                      currentId === badge.id
                        ? "rgba(90, 176, 255, 0.1)"
                        : "rgba(50, 52, 56, 0.05)"
                    }
                    key={badge.id}
                  >
                    {badge.mode}
                  </Badge>
                ))}
              </ToggleBadges>
              <InputContainer 
                placeHolder={"Add your choice date"}
                name="start"
                value={targetSaveValue.start}
                onChange={handleTargetSaveChange} 
              />              
            </div>
            
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
                type="date"
                name="end"
                value={targetSaveValue.end}
                onChange={handleTargetSaveChange}
                label={"What date would you withdraw?"}
                // onClick={() => setModal(true)}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <ButtonContainer
                onClick={() => history.push(TARGETREVIEW)}
                width="100%"
              >
                See Preview
              </ButtonContainer>
            </div>

          </InputBox>
        </Container>
      </MainLayout>
    </>
  );
};

export { TargetSave };
