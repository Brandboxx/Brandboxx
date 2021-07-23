import styled from "styled-components";

export const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  width: 6.74px;
  height: 6.74px;
  background: #149b9b81;
  border-radius: 6.47px;
  margin: 20px 2px;
  margin-top: 30px;
`;

export const ActiveSpan = styled.span`
  height: 6.54px;
  width: 23.4px;
  background: #149a9b;
  border-radius: 5px;
  margin: 20px 2px;
  margin-top: 30px;
`;

export const SelectType = styled.div`
  width: calc(70% - 40px);
  padding: 20px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;

  p {
    margin-left: 20px;
  }
`;

export const AddCardDetails = styled.div`
  display: flex;
  margin-top: 20px;
  cursor: pointer;

  p {
    margin-left: 15px;
    font-size: 14px;
    color: #149A9B;
  }
`;
