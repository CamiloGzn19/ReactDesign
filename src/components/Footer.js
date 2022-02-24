import React from "react";
import {
  Foot,
  Cont,
  Local,
  Logo,
  Contact,
  Minilogo,
  Minilogo2,
  Data,
  Text,
  List,
  Icons,
  Media,
} from "../Styles/Footer_Styles";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Foot>
      <div>
        <Logo
          src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455263/Reto%205/logo_bsqstz.svg"
          alt="Logo"
        />
      </div>
      <Cont>
        <Local>
          <Minilogo2
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455262/Reto%205/icon-location_hpv3gj.svg"
            alt=""
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua
          </Text>
        </Local>
        <div>
          <Contact>
            <Minilogo
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455262/Reto%205/icon-phone_fe7oy2.svg"
              alt="Phone"
            />
            <Data>+1-543-123-4567</Data>
          </Contact>
          <Contact>
            <Minilogo
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455262/Reto%205/icon-email_a0grrm.svg"
              alt="Email"
            />
            <Data>example@fylo.com</Data>
          </Contact>
        </div>
        <Icons>
          <ul>
            <List>About Us</List>
            <List>Jobs</List>
            <List>Press</List>
            <List>Blog</List>
          </ul>
        </Icons>
        <Icons>
          <ul>
            <List>Contact Us</List>
            <List>Terms</List>
            <List>Privacy</List>
          </ul>
        </Icons>
        <Media>
          <FaFacebookF className="FB" />
          <FaTwitter className="FB" />
          <FaInstagram className="FB" />
        </Media>
      </Cont>
    </Foot>
  );
};

export default Footer;
