import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100% !important;
  position: relative !important;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #111111;
  /* text-transform: capitalize; */

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const TextField = styled.input`
  width: calc(100% - 40px);
  border: 1px solid ${(props) => (props.errorText ? "#ff0033" : "#32343875")};
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0px 20px;
  outline: none;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  &::placeholder {
    color: #32343875;
    text-transform: capitalize;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    height: 45px;
  }
`;
