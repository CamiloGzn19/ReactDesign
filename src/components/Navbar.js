import React from "react";
import { Logo, Nav, Group, List, Ancor } from "../Styles/Navbar_Styles";

const Navbar = () => {
  return (
    <Nav>
      <Logo
        src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455263/Reto%205/logo_bsqstz.svg"
        alt="Logo"
      />
      <Group>
        <List>
          <Ancor href="#">Features</Ancor>
        </List>
        <List>
          <Ancor href="#">Team</Ancor>
        </List>
        <List>
        <Ancor href="#">Sign in</Ancor>          
        </List>
      </Group>
    </Nav>
  );
};

export default Navbar;
