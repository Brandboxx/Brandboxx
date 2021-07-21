import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100% !important;
  display: flex;
  justify-content: space-between;

  input {
    width: 50px;
    height: 61px;
    text-align: center;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;
    outline: none;
    border: 2px solid rgba(169, 169, 169, 0.8);
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: #111111;
  text-transform: capitalize;
`;
