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

import { useFormik } from "formik";

import { targetPocketSchema } from "../validation";

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
// FORMIK 
  const handleOnSubmit = (values) => {
    setTargetSaveValue({ ...values, ...targetSaveValue });
  };

  const { values, errors, handleChange, setFieldValue, handleSubmit } =
    useFormik({
      initialValues: {
        plan_type: "",
        duration: "",
        start: "",
        end: "",
        interest: 0,
        amount: 0,
        mode: ""
      },
      validationSchema: targetPocketSchema,
      onSubmit: handleOnSubmit,
    });

// FORMIK ENDS 

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
              // value={targetSaveValue.planType}
              // onChange={handleTargetSaveChange}

              errorText={errors.planType}
              value={values.planType}
              onChange={handleChange}
            />

            <div style={{ marginTop: "50px" }}>
              <InputContainer
                placeHolder={"Enter amount to target"}
                label={"How much do you want to target?"}
                name="amount"
                // value={targetSaveValue.amount}
                // onChange={handleTargetSaveChange}

                errorText={errors.amount}
                value={values.amount}
                onChange={handleChange}
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
                placeHolder={"Enter duration"}
                name="duration"
                // value={targetSaveValue.duration}
                // onChange={handleTargetSaveChange}

                errorText={errors.duration}
                value={values.duration}
                onChange={handleChange}
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
              
              <InputContainer
                // value={targetSaveValue.start}
                label={"What date would you start saving?"}
                name="start"
                type="date"
                // onChange={handleTargetSaveChange}
                
                errorText={errors.start}
                value={values.start}
                onChange={handleChange}
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
                placeHolder={"Enter your mode of saving"}
                name="mode"
                // value={targetSaveValue.mode}
                // onChange={handleTargetSaveChange} 
                errorText={errors.mode}
                value={values.mode}
                onChange={handleChange}
              />              
            </div>
            
            <div
              style={{
                marginTop: "50px",
                position: "relative",
                cursor: "pointer",
              }}
            >
             
              <InputContainer
                type="date"
                name="end"
                // value={targetSaveValue.end}
                // onChange={handleTargetSaveChange}
                label={"What date would you withdraw?"}

                errorText={errors.end}
                value={values.end}
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <ButtonContainer
              onClick={()=> history.push({ 
                pathname: TARGETREVIEW,
                state: targetSaveValue
               })
              }
                onClick={() => {handleSubmit()}}
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
