import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const Button = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #149a9b;
  background: ${(props) => props.bg};
  color: ${(props) => props.cl};
  width: 146px;
  text-align: center;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    border-radius: 10px 0px 0px 10px;
  }

  &:last-of-type {
    border-radius: 0px 10px 10px 0px;
  }
`;
