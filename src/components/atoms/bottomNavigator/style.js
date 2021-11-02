import styled from "styled-components/macro";

export const OuterContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  width: calc(100% - 60px);
  padding: 0px 30px;
  height: 71px;
  box-shadow: 0px 2px 75px rgba(155, 155, 155, 0.06);
  background-color: white;
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  height: 100%;
`;

export const LinkInfo = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 10px;
    margin-top: 10px;
    color: #b3b3b3;
    text-align: center;
  }
`;
