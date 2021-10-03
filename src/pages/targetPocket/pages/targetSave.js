import { useEffect, useState } from "react";

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

  const badges = [
    {
      id: 1,
      number: '3',
      unit: "months",
    },
    {
      id: 2,
      number: '6',
      unit: "months",
    },
    {
      id: 3,
      number: '9',
      unit: "months",
    },
    {
      id: 4,
      number: '12',
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
  const history = useHistory();
  // const [payload, setpayload] = useState(null)

  // FORMIK 
  const handleOnSubmit = (values) => {
    history.push({
      pathname: TARGETREVIEW,
      state: values
    })
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue, setValues } =
    useFormik({
      initialValues: {
        plan_type: "",
        duration: "3",
        start: "",
        end: "",
        interest: "5",
        amount: "0",
        mode: "daily"
      },
      validationSchema: targetPocketSchema,
      onSubmit: handleOnSubmit,
    });
  // FORMIK ENDS 

  useEffect(() => {
    if (values?.start && values.duration) setFieldValue("end", (new Date(new Date(values?.start).getTime() + (Number(values.duration) * 2592000000))?.toISOString()));

    console.log({ targetSave: values });
  }, [values.start, values.duration])

  const [modal, setModal] = useState(false);

  const getCurrentId = (number) => {
    setFieldValue("duration", number)
  };

  return (
    <>
      {modal ? (
        <LockModal
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
              placeHolder={"Enter Target Title"}
              label={"What are you saving for?"}
              name="plan_type"
              errorText={errors.planType}
              value={values.planType}
              onChange={handleChange}
            />

            <div style={{ marginTop: "50px" }}>
              <InputContainer
                placeHolder={"Enter amount to target"}
                label={"How much do you want to target?"}
                name="amount"
                errorText={errors.amount}
                value={values.amount}
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
                label={"What date would you start saving?"}
                name="start"
                type="date"
                errorText={errors.start}
                value={values.start}
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <p>Set date to meet target</p>
              <ToggleBadges key={values.duration}>
                {badges.map((badge) => (
                  <Badge
                    onClick={() => getCurrentId(badge.number)}
                    bg={
                      values.duration === String(badge.number)
                        ? "rgba(90, 176, 255, 0.1)"
                        : "rgba(50, 52, 56, 0.05)"
                    }
                    cl={
                      values.duration === String(badge.number)
                        ? "rgba(20, 154, 155, 1)"
                        : "rgba(50, 52, 56, 0.8)"
                    }
                    key={values.number}
                  >
                    {badge.number + " " + badge.unit}
                  </Badge>
                ))}
              </ToggleBadges>
              <InputContainer
                placeHolder={"Enter duration"}
                name="duration"
                errorText={errors.duration}
                value={values.duration}
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: "50px" }}>
              <p>Choose payment mode</p>
              <ToggleBadges key={values}>
                {otherBadges.map((badge) => (
                  <Badge
                    onClick={() => setFieldValue("mode", badge.mode)}
                    bg={
                      values.mode === badge.mode
                        ? "rgba(90, 176, 255, 0.1)"
                        : "rgba(50, 52, 56, 0.05)"
                    }
                    key={badge.id}
                  >
                    {badge.mode}
                  </Badge>
                ))}
              </ToggleBadges>
              {/* <InputContainer
                placeHolder={"Enter your mode of saving"}
                name="mode"
                errorText={errors.mode}
                value={values.mode}
                onChange={handleChange}
              /> */}
            </div>

            {/* <div
              style={{
                marginTop: "50px",
                position: "relative",
                cursor: "pointer",
              }}
            >

              <InputContainer
                type="date"
                name="end"
                label={"What date would you withdraw?"}

                errorText={errors.end}
                value={values.end}
                onChange={handleChange}
              />
            </div> */}

            <div style={{ marginTop: "50px" }}>
              <ButtonContainer
                onClick={handleSubmit}
                width="100%"
                type={"button"}
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