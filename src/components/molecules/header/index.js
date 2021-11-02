import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useGetResquest } from "../../../api/useRequestProcessor";
import { ButtonContainer } from "../../../containers";
// import { ButtonContainer } from "../../../containers";
import { timeName } from "../../../utils/dateUtils";
import {
  Container,
  Profile,
  ProfileContainer,
  Hand,
  Spacer,
  Bell,
} from "./style";

const Header = ({ setModal }) => {
  const { push } = useHistory();
  const { userDetails } = useSelector((state) => state.auth);
  const { data: profile } = useGetResquest(
    "/users/view-user-profile",
    "profile"
  );

  return (
    <Container>
      <ProfileContainer>
        <Hand src={"/assets/svg/header/profile.svg"} alt={""} />
        <Profile>
          <img
            src={profile?.gottenUser?.profile_picture?.url}
            alt={""}
            style={{ objectFit: "cover" }}
          />
        </Profile>
        <main>
          <h3>{`Good ${timeName()} ${userDetails.firstname}`}</h3>
          <p>Here is an overview of your saving</p>
        </main>
      </ProfileContainer>

      <Spacer />

      <Bell
        src="/assets/svg/header/notification.svg"
        style={{ cursor: "pointer" }}
        alt={""}
        onClick={() => toast("No notification yet!", { delay: 1000 })}
      />
      <ButtonContainer
        onClick={() => push("/pocket_plans/add_money")}
        width={"196px"}
      >
        Fast Save
      </ButtonContainer>
    </Container>
  );
};

export { Header };
