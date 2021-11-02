import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  position: relative;

  @media (max-width: 500px) {
    padding: 20px;

    button {
      margin-top: 30px;
      margin-left: 20px;
    }

    img {
      &:last-of-type {
        margin-right: 0px !important;
      }
    }
  }
`;

export const Spacer = styled.div`
  flex: 1;

  @media (max-width: 500px) {
    flex: 0;
  }
`;

export const Hand = styled.img`
  position: absolute;
  right: -7%;
  top: 35%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  main {
    margin-left: 20px;

    h3 {
      font-size: 24px;
      color: #323438;
    }
    p {
      font-size: 16px;
      color: #323438;
    }
  }

  @media (max-width: 800px) {
    align-items: flex-start;
    main {
      max-width: 200px;
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 16px;
    }
  }
`;

export const Bell = styled.img`
  margin-right: 30px;

  @media (max-width: 500px) {
    margin-right: 0px;
    width: 20px;
    position: absolute;
    right: 30px;
    top: 30px;
  }
`;

export const Profile = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50px;
  overflow: hidden;
  border: 3px solid #149a9b;
  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
