import { ButtonContainer } from "../../../containers";
import { Container, Profile, ProfileContainer, Hand } from "./style";

const Header = ({ setModal }) => {
  return (
    <Container>
      <ProfileContainer>
        {" "}
        <Hand src={"/assets/svg/header/profile.svg"} alt={""} />
        <Profile>
          <img src={"/assets/svg/header/profile.png"} alt={""} />
        </Profile>
        <main>
          {" "}
          <h3>Good morning Jane</h3>
          <p>Here is an overview of your saving</p>
        </main>
      </ProfileContainer>

      <div style={{ flex: "1", cursor: "pointer" }} />
      <img
        src="/assets/svg/header/notification.svg"
        style={{ marginRight: "30px" }}
        alt={""}
      />
      <ButtonContainer onClick={() => setModal(true)} width={"196px"}>
        Fast Save
      </ButtonContainer>
    </Container>
  );
};

export { Header };
