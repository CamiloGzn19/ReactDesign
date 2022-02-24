import React from "react";
import { Logo, Nav, Group, List } from "../Styles/Navbar_Styles";

const Navbar = () => {
  return (
    <Nav>
      <Logo
        src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455263/Reto%205/logo_bsqstz.svg"
        alt="Logo"
      />
      <Group>
        <List>
          <a href="#">Features</a>
        </List>
        <List>
          <a href="#">Team</a>
        </List>
        <List>
        <a href="#">Sign in</a>          
        </List>
      </Group>
    </Nav>
  );
};

export default Navbar;
