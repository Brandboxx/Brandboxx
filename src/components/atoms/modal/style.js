import styled from "styled-components";

export const Container = styled.div``;

export const Tint = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2;
  background: rgba(50, 52, 56, 0.1);
`;

export const ModalContainer = styled.div`
  width: calc(640px - 80px);
  height: fit-content;
  border-radius: 8px;
  background: #fff;
  padding: 40px 40px;
  z-index: 3;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 16px 20px rgba(50, 50, 71, 0.05),
    0px 24px 50px rgba(50, 50, 71, 0.05);
  border: 1px solid rgba(228, 228, 228, 0.6);
`;
