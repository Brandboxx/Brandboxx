import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Options = styled.div`
  width: fit-content;
  text-align: center;
  cursor: pointer;
  margin-left: 30px;
  color: rgba(50, 52, 56, 1);
  font-size: 14px;
  margin-top: 50px;

  &:first-of-type {
    margin-left: 0;
  }

  @media(max-width: 800px){
    font-size: 12px;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: ${(props) => (props.currentId === props.tab ? "100%" : "0%")};
    background-color: rgba(20, 154, 155, 1);
    margin-top: 12px;
    transition: 0.3s ease-in-out;
  }
`;
