import styled from "styled-components/macro";

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  padding: 20px;
  margin-top: 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.cl};
  }
`;

export const Content = styled.p`
  color: rgba(50, 52, 56, 0.6);
  font-size: 12px;
  margin-top: 10px;
`;

export const Amount = styled.h3`
  margin-top: 20px;
  font-size: 14px;
  color: ${(props) => props.cl};
`;
