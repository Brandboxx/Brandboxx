import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 35px 40px;

  @media (max-width: 800px) {
    padding: 30px 20px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BigCardContainer = styled.div`
  @media (max-width: 800px) {
    width: 100% !important;
  }
`;

export const SmallCardContainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const TransactionContainer = styled.div`
  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;

export const Credit = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 65%;
  justify-content: space-between;
  font-size: 16px !important;
  padding: 15px 0px;
  border-bottom: 1px solid #e4e4e490;
  padding-left: 20px;
  cursor: ${(props) =>
    props.targetPocket || props.lockPocket ? "pointer" : "default"};

  &:hover {
    background: ${(props) =>
      props.targetPocket || props.lockPocket
        ? "rgba(50, 52, 56, 0.1)"
        : "transparent"};
    opacity: 0.75;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 8px;
    color: rgba(50, 52, 56, 0.8);
  }

  @media (max-width: 800px) {
    width: 100% !important;
    padding-left: 0px;

    img {
      margin-left: 0 !important;
    }
  }

  & > * {
    width: 40%;

    /* @media (max-width: 800px) {
      width: 100%;
    } */
  }
  & > :last-child {
    width: ${(props) =>
      props.targetPocket ? "100% !important" : "20% !important"};
  }

  p {
    color: rgba(50, 52, 56, 0.8);
  }
  &.custom-active {
    /* background: rgba(50, 52, 56, 0.1); */
  }
`;

export const GoBackContainer = styled.div`
padding-bottom: 30px!important;
  @media (max-width: 800px) {
    margin-left: 0px !important;
    padding-left: 0px!important;
  }
`;
