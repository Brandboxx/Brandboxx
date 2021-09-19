import styled, { keyframes } from "styled-components/macro";

const fill = keyframes`
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 21, 40, 0.3);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

export const ProgressContainer = styled.div`
  width: 0;
  background-color: #149a9b;
  height: 5px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: fixed;
  top: 0;
  animation: ${fill} 1s forwards infinite;
`;
