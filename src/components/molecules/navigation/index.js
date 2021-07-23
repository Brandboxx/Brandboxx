import React, { useState } from "react";

import { Logo } from "../../../components";

import { SideNavigation, LogoContainer, LinkContainer } from "./style";

const Navigation = () => {
  const [navigation, setNavigation] = useState([
    {
      name: "Dashboard",
      route: "/dashboard",
      img: "/assets/svg/navigation/dashboard.svg",
      alt: "/assets/svg/navigation/althome.svg",
    },
    {
      name: "Pocket Plans",
      route: "/pocket_plans",
      img: "/assets/svg/navigation/user.svg",
      alt: "/assets/svg/navigation/althome.svg",
    },

    {
      name: "Account",
      route: "/account",
      img: "/assets/svg/navigation/plans.svg",
      alt: "/assets/svg/navigation/althome.svg",
    },
  ]);

  return (
    <SideNavigation>
      <LogoContainer>
        <Logo status="alternate" />
      </LogoContainer>

      {navigation.map((navigation, i) => (
        <LinkContainer key={i}>
          <img src={navigation.img} alt={""} />
          <p>{navigation.name}</p>
        </LinkContainer>
      ))}

      <LinkContainer>
        <img src={"/assets/svg/navigation/logout.svg"} alt={""} />
        <p>Logout</p>
      </LinkContainer>
    </SideNavigation>
  );
};

export { Navigation };
