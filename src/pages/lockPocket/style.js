import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 35px 40px;
`;

export const TabContainer = styled.div`
  display: flex;
  height: 25px;
  border: 1px solid rgba(50, 52, 56, 0.4);
  width: 188px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0px;
`;

export const Tab = styled.button`
  width: 100%;
  cursor: pointer;
  background: transparent;
  width: 94px;
  border: none;

  p {
    color: rgba(251, 113, 6, 1);
    font-size: 12px;
    text-align: center;
  }
`;

export const ActiveTab = styled.button`
  width: 100%;
  cursor: pointer;
  background: rgba(251, 113, 6, 1);
  width: 94px;
  border: none;

  p {
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
`;
