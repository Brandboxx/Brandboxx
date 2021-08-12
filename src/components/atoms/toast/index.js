import styled, { keyframes } from "styled-components";

const Toast = ({ message, setToast }) => {
  return (
    <Container>
      <img src={"/assets/svg/circleCheck.svg"} alt={""} />
      <main>
        <p>{message?.header}</p>
        <p>{message?.message}</p>
      </main>
      <div style={{ flex: 1 }} />
      <img
        style={{ cursor: "pointer" }}
        onClick={() => setToast(null)}
        src={"/assets/svg/close.svg"}
        alt={""}
      />
    </Container>
  );
};

const animate = keyframes`
    0% {
    right: -100%;
  }
  100% {
    right: 20px;
  }
  `;

const Container = styled.div`
  width: 368px;
  height: fit-content;
  padding: 20px 16px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 8px 12px rgba(9, 30, 66, 0.15),
    0px 0px 1px rgba(9, 30, 66, 0.31);

  display: flex;
  align-items: flex-start;
  margin-right: 20px;

  position: fixed;
  animation: ${animate} 0.3s linear forwards;
  top: 80px;
  z-index: 1000;

  main {
    margin-left: 20px;
    max-width: 300px;

    p {
      font-size: 14px;
      color: rgba(66, 82, 110, 1);

      &:first-of-type {
        padding-bottom: 5px;
      }
    }
  }
`;

export { Toast };
