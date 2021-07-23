import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { Logo } from "../../../components";

import {
  SideNavigation,
  LogoContainer,
  LinkContainer,
  ActiveLink,
} from "./style";

const Navigation = () => {
  const history = useHistory();

  const [currentId, setCurrentId] = useState(1);

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
      alt: "/assets/svg/navigation/altplan.svg",
    },

    {
      name: "Account",
      route: "/account",
      img: "/assets/svg/navigation/plans.svg",
      alt: "/assets/svg/navigation/altuser.svg",
    },
  ]);

  const handleCurrentId = (id, route) => {
    setCurrentId(id);
    // history.push(route);
    console.log(currentId)
  };

  return (
    <SideNavigation>
      <LogoContainer>
        <Logo status="alternate" />
      </LogoContainer>

      {navigation.map((navigation, i) =>
        currentId === i + 1 ? (
          <ActiveLink>
            <div>
              <img src={navigation.alt} />
              <p>{navigation.name}</p>
            </div>
          </ActiveLink>
        ) : (
          <LinkContainer
            onClick={() => handleCurrentId(i + 1, navigation.route)}
            key={i}
          >
            <img src={navigation.img} alt={""} />
            <p>{navigation.name}</p>
          </LinkContainer>
        )
      )}

      <LinkContainer>
        <img src={"/assets/svg/navigation/logout.svg"} alt={""} />
        <p>Logout</p>
      </LinkContainer>
    </SideNavigation>
  );
};

export { Navigation };
