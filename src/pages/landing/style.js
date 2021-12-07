import styled from "styled-components/macro";

export const Banner = styled.div`
  max-height: 730px;
  padding: 0px 100px;

  background-color: #edfefe;
  background-image: url("/assets/svg/pattern.svg");

  @media (max-width: 800px) {
    padding: 0px 20px;
    height: auto;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;

    img {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const Text = styled.main`
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #18191f;
  }

  p {
    margin-top: 20px;
    color: #18191f;
    line-height: 25px;
  }

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }

    button {
      margin: 0px auto;
      width: 50% !important;
    }
  }
`;

export const Jumbotron = styled.div`
  padding: 150px 100px;
  background-color: ${(props) => props.bg};
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 50px 20px;
  }
`;

export const JumbotronHeaders = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: #18191f;
  }

  p {
    margin-top: 20px;
    color: #18191f;
    text-align: center;
    line-height: 25px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const JumbotronInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ServiceCards = styled.div`
  width: 32.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 1000px) {
    width: 49%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  p {
    font-size: 16px;
    line-height: 25px;
    margin-top: 10px;
    text-align: center;

    &:first-of-type {
      color: #149a9b;
      margin-top: 20px;
      font-weight: 700;
    }

    color: #18191f;
  }
`;

export const PlanCards = styled.div`
  width: 31.3%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: fit-content;
  }

  main {
    display: flex;
    align-items: flex-start;
    margin-top: 30px;

    img {
      /* margin-top: -80px; */
    }

    aside {
      margin-left: 20px;

      h3 {
        font-size: 24px;
        color: ${(props) => props.cl};
      }

      p {
        color: #18191f;
        line-height: 25px;
        margin-top: 10px;
        word-wrap: break-word;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 49%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ReviewCards = styled.div`
  width: 20%;
  margin-top: 50px;
  p {
    margin-top: 20px;
    line-height: 25px;
    color: #858585;
    font-size: 12px;
  }

  div {
    display: flex;
    margin-top: 30px;
    align-items: center;

    main {
      width: 41px;
      height: 41px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
    aside {
      margin-left: 20px;
      h3 {
        font-size: 20px;
        color: #000;
      }
      p {
        color: #858585;
        margin: 0px;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 49%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const MobileOverview = styled.div`
  width: calc(100% - 140px);
  padding: 0px 70px;
  height: 317px;
  border-radius: 10px;
  position: relative;
  background-color: #c3f2f2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: calc(100% - 60px);
    padding: 30px 30px;
    height: auto;
  }

  aside {
    margin-right: 100px;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-right: 0;
    }
    h2 {
      font-size: 36px;
      color: #18191f;

      @media (max-width: 800px) {
        font-size: 24px;
        text-align: center;
      }
    }
  }
  img {
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const AbsoluteImg = styled.img`
  position: absolute;

  &:nth-child(2) {
    top: 0%;
    left: 40%;
  }

  &:nth-child(3) {
    bottom: 20px;
    right: 20px;
  }
`;

export const MobileImg = styled.img`
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const RingImage = styled.img`
  position: absolute;
  bottom: -100px;
  right: -100px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  background-color: #000000;
  padding: 0px 30px;
  main {
    padding: 100px 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;

    flex-wrap: wrap;

    @media (max-width: 700px) {
      padding: 50px 20px;
    }

    aside {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 800px) {
        margin-top: 20px;
      }
      div {
        margin-right: 100px;

        @media (max-width: 800px) {
          margin-bottom: 30px;

          h6 {
            font-size: 14px;
          }

          p {
            font-size: 12px;
          }
        }
        h6 {
          font-size: 18px;
          color: #f4f5f7;
          text-transform: capitalize;
          padding-bottom: 10px;
        }

        p {
          color: #eeeff4;
          margin-top: 20px;
          cursor: pointer;
          font-size: 14px;
        }
      }

      @media (max-width: 1000px) {
        margin-top: 50px;
      }
    }
  }
  footer {
    padding: 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    p {
      color: #d9dbe1;
      font-size: 12px;
    }
    div {
      display: flex;
      justify-content: space-between;
      width: 200px;

      img {
        cursor: pointer;
        @media (max-width: 800px) {
          margin-top: 20px;
        }
      }
    }

    @media (max-width: 700px) {
      padding: 30px 20px;
    }
  }
`;
