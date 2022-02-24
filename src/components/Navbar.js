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
          <a>Features</a>
        </List>
        <List>
          <a>Team</a>
        </List>
        <List>
        <a>Sign in</a>          
        </List>
      </Group>
    </Nav>
  );
};

export default Navbar;
