import { useHistory } from "react-router-dom";

const Logo = ({ status = "normal" }) => {
  const history = useHistory();

  if (status === "alternate") {
    return (
      <img
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/dashboard")}
        src={"/assets/svg/alternateLogo.svg"}
        alt={""}
      />
    );
  } else if (status === "auth") {
    return (
      <img
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
        src={"/assets/svg/alternateLogo.svg"}
        alt={""}
      />
    );
  }
  else {
    return (
      <img
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
        src={"/assets/svg/logo.svg"}
        alt={""}
      />
    );
  }
};

export { Logo };
