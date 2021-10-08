import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { usePostRequest } from "../../../api/useRequestProcessor";
import { ButtonContainer } from "../../../containers";
import { Container, Title } from "./styles";

const ContactUs = () => {

  const { userDetails } = useSelector(state => state.auth);
  const { mutate: sendMessage } = usePostRequest("/messanger/send-message", "profile");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {

    sendMessage({ message }, {
      onSuccess: (res) => {
        console.log({ res })
        toast("Message sent successfully!", { type: "success" });
        setMessage("")
      },
    });
  }

  return (
    <Container>
      <Title>Hello {userDetails.firstname}</Title>
      <FlexContainer>
        <main>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(50, 52, 56, 0.8)",
              marginTop: "20px",
            }}
          >
            Get in touch with us through this medium
          </p>
          <Info>
            <img src={"/assets/svg/home.svg"} alt={""} />
            <p>Address</p>
          </Info>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(50, 52, 56, 0.8)",
              marginTop: "10px",
            }}
          >
            14, Adeshina Street, Oyimbo Mainland Lagos.
          </p>
          <Info>
            <img src={"/assets/svg/phone.svg"} alt={""} />
            <p>Call Support Contact</p>
          </Info>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(50, 52, 56, 0.8)",
              marginTop: "10px",
            }}
          >
            +234 678 986 986
          </p>
          <Socials>
            <img src={"assets/svg/socials/facebook.svg"} alt={""} />
            <img src={"assets/svg/socials/instagram.svg"} alt={""} />
            <img src={"assets/svg/socials/linkedin.svg"} alt={""} />
            <img src={"assets/svg/socials/twitter.svg"} alt={""} />
          </Socials>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(50, 52, 56, 0.8)",
              marginTop: "10px",
            }}
          >
            @centerpocket
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(50, 52, 56, 1)",
              marginTop: "40px",
            }}
          >
            Send us feedback on our application, we would do our best to serve
            you better
          </p>
          <TextArea placeholder="Type message" rows={8} value={message} onChange={(e) => setMessage(e.target.value)} />
          <div style={{ marginTop: "40px" }}>
            <ButtonContainer width={"196px"} type={"submit"} onClick={handleSubmit}>Save Changes</ButtonContainer>
          </div>
        </main>
        <aside>
          <img src={"/assets/svg/map.svg"} alt={""} />
        </aside>
      </FlexContainer>
    </Container>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  p {
    margin-left: 10px;
    color: rgba(20, 154, 155, 1);
    font-size: 14px;
  }
`;

const Socials = styled.div`
  margin-top: 40px;
  img {
    margin-left: 10px;

    &:first-of-type {
      margin-left: 0px;
    }
  }

  aside {
    width: 50%;
    height: 212px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid rgba(50, 52, 56, 0.4);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  outline: none;
`;

export { ContactUs };
