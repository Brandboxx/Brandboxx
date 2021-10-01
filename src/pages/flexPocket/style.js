import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 35px 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TransactionContainer = styled.div`

`;

export const Credit = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  padding: 15px 0px;

  p {
    color: rgba(50, 52, 56, 0.8);

  }
  &.custom-active {
    background: rgba(50, 52, 56, 0.1);
    opacity: 0.75;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 8px;
    color: rgba(50, 52, 56, 0.8);
  }
`;