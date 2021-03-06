import styled from "styled-components/macro";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  left: 24px;

  @media(max-width: 800px) {
    left: 5px;
  }

  p {
    color: #323438;
    text-transform: capitalize;
    margin-left: 10px;
  }
`;
