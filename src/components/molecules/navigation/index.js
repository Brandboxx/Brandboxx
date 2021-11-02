import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useHistory, useLocation } from "react-router-dom";

import { Logo } from "../../../components";
import { LOGOUT } from "../../../reduxSetup/constant";

import {
  SideNavigation,
  LogoContainer,
  LinkContainer,
  ActiveLink,
} from "./style";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const location = useLocation();

  const [currentId, setCurrentId] = useState("");

  const navigation = [
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
  ];

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setCurrentId("/dashboard");
    } else if (location.pathname.includes("/pocket_plans")) {
      setCurrentId("/pocket_plans");
    } else if (location.pathname.includes("/account")) {
      setCurrentId("/account");
    }
  }, [location]);

  const handleCurrentId = (route) => {
    history.push(route);
  };

  return (
    <SideNavigation>
      <LogoContainer>
        <Logo status="alternate" />
      </LogoContainer>

      {navigation.map((navigation, i) =>
        currentId === navigation.route ? (
          <ActiveLink key={i}>
            <div>
              <img src={navigation.alt} alt={""} />
              <p>{navigation.name}</p>
            </div>
          </ActiveLink>
        ) : (
          <LinkContainer
            onClick={() => handleCurrentId(navigation.route)}
            key={i}
          >
            <img src={navigation.img} alt={""} />
            <p>{navigation.name}</p>
          </LinkContainer>
        )
      )}

      <LinkContainer>
        <img src={"/assets/svg/navigation/logout.svg"} alt={""} />
        <p onClick={() => dispatch({ type: LOGOUT })}>Logout</p>
      </LinkContainer>
    </SideNavigation>
  );
};

export { Navigation };
