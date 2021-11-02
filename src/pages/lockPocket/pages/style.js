import styled from "styled-components";

export const Container = styled.div`
  padding: 35px 40px;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 800px) {
    padding: 30px 20px;
  }
`;

export const TextInfo = styled.div`
  width: 40%;
  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  width: calc(60% - 80px);
  padding: 20px 40px;

  @media(max-width: 800px) {
    padding: 20px 0px;
    width: 100%;
  }
`;

export const ToggleBadges = styled.div`
  display: flex;
  align-items: center;
`;

export const Badge = styled.div`
  width: 60px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.bg};
  margin: 20px 0px 10px 0px;
  margin-left: 30px;
  font-size: 10px;
  color: ${(props) => props.cl};

  &:first-of-type {
    margin-left: 0;
  }
`;

export const Interest = styled.div`
  padding-top: 10px;
  p {
    font-size: 12px;
    color: rgba(20, 154, 155, 1);
    line-height: 10px;
    margin-top: 5px;
  }
`;

export const ReviewContainer = styled.div`
  border-radius: 5px;
  background-color: rgba(238, 247, 255, 1);
  padding: 30px 40px;
  padding-bottom: 50px;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled.p`
  color: rgba(20, 154, 155, 1);
  font-size: 16px;
  text-transform: capitalize;
`;

export const Info = styled.p`
  font-size: 18px;
  margin-top: 5px;
  color: rgba(50, 52, 56, 1);
`;

export const Header = styled.h3`
  color: rgba(50, 52, 56, 1);
  text-transform: capitalize;
  font-size: 20px;
  margin-top: 5px;
`;
