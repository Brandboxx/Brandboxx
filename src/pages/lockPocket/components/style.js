import styled from "styled-components";

export const Options = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  cursor: pointer;

  p {
    margin-left: 30px;
    font: 14px;
  }
`;

export const AddCard = styled.p`
  color: rgba(20, 154, 155, 1);
  padding-left: 40px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 20px;
  span {
    padding-right: 20px;
    font-size: 14px!important;
  }
`;
