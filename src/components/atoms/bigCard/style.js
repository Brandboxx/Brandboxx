import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
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
  color: ${(props) => props.cl}
`;

export const Amount = styled.h2`
  font-size: 36px;
  color: ${(props) => props.cl};
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
  margin-right: 10px;

  p {
    margin-left: 10px;
  }
`;

export const AltButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 35px;
  color: ${(props) => props.cl};
  border: 1px solid ${(props) => props.cl};
  border-radius: 5px;
  font-size: 12px;
  padding: 0px 10px;
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
