import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #ffffff;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.4s ease-in-out;
  overflow: hidden;

  button {
    margin-bottom: 30px;

    &:first-of-type {
      margin-top: 40px;
    }
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const LinkBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #000000;
  border: none;
  font-size: 16px;
`;

export const Border = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  height: 1px;
  width: 70%;
  background-color: rgba(50, 52, 56, 0.4); ;
`;
