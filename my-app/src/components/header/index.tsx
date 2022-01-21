import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/logo.png";
const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
    </Container>
  );
};

export default Header;
