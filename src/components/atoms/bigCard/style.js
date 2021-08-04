import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #e7f5f5;
  padding: 40px 40px;
  padding-bottom: 100px;
  margin-top: 30px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopHead = styled.p`
  font-size: 16px;
  color: #323438;
`;

export const Amount = styled.h2`
  font-size: 36px;
  color: #149a9b;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #149a9b;
  width: 110px;
  height: 35px;
  color: #fff;
  border: 1px solid #149a9b;
  border-radius: 5px;
  font-size: 12px;
  padding: 0px 10px;
  margin-top: 40px;
  cursor: pointer;

  p {
    margin-left: 10px;
  }
`;

export const AltButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 110px;
  height: 35px;
  color: #149a9b;
  border: 1px solid #149a9b;
  border-radius: 5px;
  font-size: 12px;
  padding: 0px 10px;
  margin-left: 20px;
  margin-top: 40px;
  cursor: pointer;
  p {
    margin-left: 10px;
  }
`;

export const Content = styled.p`
  color: rgba(50, 52, 56, 0.6);
  margin-top: 40px;
`;
