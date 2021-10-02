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
    color: #ADAEAF;
    font-size: 12px;
    text-align: center;
  }
`;

export const ActiveTab = styled.button`
  width: 100%;
  cursor: pointer;
  background: #580273;  width: 94px;
  border: none;
  border-radius: 10px;

  p {
    color: #fff;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
  }
`;

