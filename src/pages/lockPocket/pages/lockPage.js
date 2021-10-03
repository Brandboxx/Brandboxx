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
import { useFormik } from "formik";
import { lockSchema } from "../validation";
import { useMemo } from "react";
import { currencyFormatter } from "../../../utils/numberFormater";
import { useEffect } from "react";
// import { useGetResquest } from "../../../api/useRequestProcessor";

const LockPage = () => {
  const badges = [
    {
      id: 3,
      number: 3,
      unit: "months",
    },
    {
      id: 6,
      number: 6,
      unit: "months",
    },
    {
      id: 9,
      number: 9,
      unit: "months",
    },
    {
      id: 12,
      number: 1,
      unit: "year",
    },
  ];

  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [duration, setDuration] = useState(3);
  const [payload, setPayload] = useState(null);

  // const { data: viewPocketBalance } = useGetResquest(
  //   "/users/view-pocket-balance",
  //   ["users", "view-pocket-balance"]
  // );

  const handleOnSubmit = (values) => {
    setPayload({ ...values, duration: duration ?? values.duration });
  };

  const { values, errors, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      duration: "3",
      amount: "",
      payment_mtd: "",
    },
    validationSchema: lockSchema,
    onSubmit: handleOnSubmit,
  });

  const handleMethodName = (name) => {
    setFieldValue("payment_mtd", name);
  };
  const getCurrentId = (id) => {
    setDuration(id);
    setFieldValue("duration", id);
  };

  const handleDurationChange = (e) => {
    setFieldValue("duration", e.target.value);
    e.target.value ? setDuration(null) : setDuration(3);
  };

  const maturityDate = useMemo(() => {
    const date = new Date();
    const months = duration ?? Number(values.duration);
    date.setMonth(date.getMonth() + months);
    return date.toDateString();
  }, [duration, values.duration]);

  const estimatedAmount = useMemo(() => {
    const princpal = !isNaN(values.amount) ? Number(values.amount) : 0;
    const rate = 5 / 100;
    const months = duration ?? Number(values.duration);
    const time = months / 12;
    const simpleInterest = princpal * rate * time;
    return princpal + simpleInterest;
  }, [duration, values.duration, values.amount]);

  useEffect(() => {
    if (payload)
      history.push(LOCKREVIEW, { ...payload, estimatedAmount, maturityDate });
  }, [payload, history, estimatedAmount, maturityDate]);
  return (
    <>
      {modal ? (
        <LockModal
          handleMethodName={handleMethodName}
          modal={modal}
          name={values.payment_mtd}
          setModal={setModal}
        />
      ) : null}
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
              placeHolder={"Enter title of lock"}
              label={<>What are you saving for? <br /> <small style={{ color: "#c4c4c4" }}>input a title to your Lock Pocket</small></>}
              type={"text"}
              value={values.title}
              errorText={errors.title}
              onChange={handleChange("title")}
            />
            <div style={{ marginTop: "50px" }}>
              <InputContainer
                placeHolder={"Enter amount to lock"}
                label={"How much do you want to lock?"}
                type={"text"}
                value={values.amount}
                errorText={errors.amount}
                onChange={handleChange("amount")}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <p>How long would you want to lock?</p>
              <ToggleBadges>
                {badges.map((badge) => (
                  <Badge
                    onClick={() => getCurrentId(badge.id)}
                    bg={
                      duration === badge.id
                        ? "rgba(90, 176, 255, 0.1)"
                        : "rgba(50, 52, 56, 0.05)"
                    }
                    cl={
                      duration === badge.id
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
                type={"number"}
                placeHolder={"Enter your choice in months"}
                value={values.duration}
                errorText={errors.duration}
                onChange={handleDurationChange}
              />
            </div>
            <Interest>
              <p>Interest Rate: 5%</p>
              <p> Maturity Date: {`${maturityDate}`}</p>
              <p>Estimated Amount:{" " + currencyFormatter(estimatedAmount)}</p>
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
                value={values.payment_mtd}
                style={{ cursor: "pointer" }}
                disabled
                placeHolder={"Select payment method"}
                label={"Choose payment method"}
                onClick={() => setModal(true)}
              />
            </div>
            <div style={{ marginTop: "50px" }}>
              <ButtonContainer
                type={"button"}
                width="100%"
                onClick={handleSubmit}
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
