import React from "react";
import {
    Header,
    LogoImage
} from "./HeaderWithLogo.styles";

import LOGO from "../../assets/LOGO.png";
const HeaderWithLogo = () => {
  return (
    <Header>
      <LogoImage src={LOGO} alt="Logo" />
    </Header>
  );
};

export default HeaderWithLogo;
