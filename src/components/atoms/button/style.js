import styled from "styled-components/macro";

export const Container = styled.button`
  width: ${(props) => props.width};
  height: 50px;
  border-radius: 8px;
  background: ${(props) => props.bg};
  color: ${(props) => props.cl};
  border: 1px solid #149a9b;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #149b9b3d;
  }
`;
